#!/bin/bash

# Hatalı testler olsa da script durmasın
set +e

BROWSER=${1:-chrome}
ROOT_DIR="$(cd "$(dirname "$0")"; pwd)"
CLIENT_DIR="$ROOT_DIR/client"
TEST_RUNNER_DIR="$ROOT_DIR/test-automation"

CLIENT_PID=""
MOCK_PID=""

cleanup() {
    echo ""
    echo "🧹 Temizlik başlatılıyor..."

    if [ -n "$CLIENT_PID" ]; then
        echo "🛑 Web uygulaması kapatılıyor (PID $CLIENT_PID)..."
        kill $CLIENT_PID 2>/dev/null || echo "⚠️ Web uygulaması zaten kapanmış"
    fi

    if [ -n "$MOCK_PID" ]; then
        echo "🛑 Mock server kapatılıyor (PID $MOCK_PID)..."
        kill $MOCK_PID 2>/dev/null || echo "⚠️ Mock server zaten kapanmış"
    fi

    echo "✅ Temizlik tamamlandı. Çıkılıyor."
}

trap cleanup EXIT
trap cleanup INT TERM

echo "📦 Proje dizini: $ROOT_DIR"
echo "🧪 Kullanılacak browser: $BROWSER"

echo "🚀 Web başlatılıyor..."
cd "$CLIENT_DIR"
npm install
npm run dev &
CLIENT_PID=$!
sleep 10

echo "🧪 Mock Server başlatılıyor..."
cd "$TEST_RUNNER_DIR"
mvn compile exec:java -Dexec.mainClass="ApiMockServer" &
MOCK_PID=$!
sleep 5

echo "🔍 Testler çalıştırılıyor..."
if ! mvn test -Dbrowser="$BROWSER"; then
    echo "⚠️ Testler tamamlandı. Detaylı sonuçlar:"
    echo "📄 $TEST_RUNNER_DIR/target/cucumber-reports/cucumber-html-report.html"
    if command -v xdg-open > /dev/null; then
        xdg-open "$TEST_RUNNER_DIR/target/cucumber-reports/cucumber-html-report.html"
    elif command -v open > /dev/null; then
        open "$TEST_RUNNER_DIR/target/cucumber-reports/cucumber-html-report.html"
    elif command -v start > /dev/null; then
        start "$TEST_RUNNER_DIR/target/cucumber-reports/cucumber-html-report.html"
    else
        echo "Raporu otomatik açmak için uygun bir komut bulunamadı."
    fi
fi

