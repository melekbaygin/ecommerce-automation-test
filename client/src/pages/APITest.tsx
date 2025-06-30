import React, { useState } from 'react';
import { Download, Play, CheckCircle, XCircle } from 'lucide-react';

interface APIResponse {
  endpoint: string;
  status: 'success' | 'error';
  data: any;
  timestamp: string;
}

const APITest: React.FC = () => {
  const [responses, setResponses] = useState<APIResponse[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState<string>('');

  // Mock API endpoints
  const mockAPI = {
    token: async (user: string, pass: string) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      if (user === 'testuser' && pass === 'testpass') {
        return { token: 'mock-jwt-token-' + Date.now() };
      }
      throw new Error('Invalid credentials');
    },
    
    viewInvoice: async (barcode: string) => {
      await new Promise(resolve => setTimeout(resolve, 800));
      return {
        InvoiceLink: `http://abc.com/invoice-${barcode}.pdf`,
        Result: { success: true }
      };
    },
    
    sendInvoice: async (token: string, barcode: string) => {
      await new Promise(resolve => setTimeout(resolve, 1200));
      if (!token) {
        throw new Error('Token required');
      }
      return {
        Message: 'Invoice sent successfully',
        Barcode: barcode,
        Status: 'sent'
      };
    }
  };

  const runAPITest = async () => {
    setIsLoading(true);
    setResponses([]);
    
    try {
      // 1. Get token
      const tokenResponse = await mockAPI.token('testuser', 'testpass');
      const newToken = tokenResponse.token;
      setToken(newToken);
      
      setResponses(prev => [...prev, {
        endpoint: 'token',
        status: 'success',
        data: tokenResponse,
        timestamp: new Date().toISOString()
      }]);

      // 2. View invoice
      const barcode = '1234567890123';
      const invoiceResponse = await mockAPI.viewInvoice(barcode);
      
      setResponses(prev => [...prev, {
        endpoint: 'viewInvoice',
        status: 'success',
        data: invoiceResponse,
        timestamp: new Date().toISOString()
      }]);

      // 3. Send invoice
      const sendResponse = await mockAPI.sendInvoice(newToken, barcode);
      
      setResponses(prev => [...prev, {
        endpoint: 'sendInvoice',
        status: 'success',
        data: sendResponse,
        timestamp: new Date().toISOString()
      }]);

    } catch (error) {
      setResponses(prev => [...prev, {
        endpoint: 'error',
        status: 'error',
        data: { error: error instanceof Error ? error.message : 'Unknown error' },
        timestamp: new Date().toISOString()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const downloadResponses = () => {
    const dataStr = JSON.stringify(responses, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `api-test-responses-${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900">API Test Arayüzü</h1>
            <p className="text-gray-600 mt-1">Mock API endpoint'lerini test edin</p>
          </div>

          <div className="p-6">
            {/* API Endpoints Info */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Test Edilecek Endpoint'ler</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900">1. Token</h3>
                  <p className="text-sm text-gray-600 mt-1">POST - Authentication</p>
                  <p className="text-xs text-gray-500 mt-2">Header: user, pass</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900">2. View Invoice</h3>
                  <p className="text-sm text-gray-600 mt-1">GET - Invoice details</p>
                  <p className="text-xs text-gray-500 mt-2">Param: barcode</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900">3. Send Invoice</h3>
                  <p className="text-sm text-gray-600 mt-1">POST - Send invoice</p>
                  <p className="text-xs text-gray-500 mt-2">Header: token, Body: barcode</p>
                </div>
              </div>
            </div>

            {/* Test Controls */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={runAPITest}
                disabled={isLoading}
                id="run-api-test"
                data-testid="run-api-test"
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Play className="h-5 w-5" />
                <span>{isLoading ? 'Test Çalışıyor...' : 'API Testini Başlat'}</span>
              </button>
              
              {responses.length > 0 && (
                <button
                  onClick={downloadResponses}
                  id="download-responses"
                  data-testid="download-responses"
                  className="flex items-center justify-center space-x-2 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Download className="h-5 w-5" />
                  <span>Yanıtları İndir</span>
                </button>
              )}
            </div>

            {/* Current Token */}
            {token && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <h3 className="text-sm font-medium text-green-800 mb-2">Mevcut Token:</h3>
                <code className="text-xs text-green-700 break-all">{token}</code>
              </div>
            )}

            {/* API Responses */}
            {isLoading && (
              <div className="text-center py-8">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                <p className="mt-2 text-gray-600">API testleri çalışıyor...</p>
              </div>
            )}

            {responses.length > 0 && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-gray-900">Test Sonuçları</h2>
                {responses.map((response, index) => (
                  <div
                    key={index}
                    data-testid={`api-response-${response.endpoint}`}
                    className={`border rounded-lg p-4 ${
                      response.status === 'success' 
                        ? 'border-green-200 bg-green-50' 
                        : 'border-red-200 bg-red-50'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        {response.status === 'success' ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-600" />
                        )}
                        <h3 className="font-medium text-gray-900">
                          {response.endpoint}
                        </h3>
                      </div>
                      <span className="text-xs text-gray-500">
                        {new Date(response.timestamp).toLocaleString('tr-TR')}
                      </span>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded p-3">
                      <pre className="text-sm text-gray-700 whitespace-pre-wrap overflow-x-auto">
                        {JSON.stringify(response.data, null, 2)}
                      </pre>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default APITest;