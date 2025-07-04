"use client";
import React, { useState } from 'react';
import { 
  FileText, 
  Calendar, 
  DollarSign, 
  Send, 
  Eye, 
  Download, 
  CreditCard,
  CheckCircle,
  Clock,
  AlertCircle,
  Plus,
  Trash2
} from 'lucide-react';

interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  rate: number;
  amount: number;
}

interface InvoiceData {
  number: string;
  date: string;
  dueDate: string;
  client: {
    name: string;
    email: string;
    address: string;
  };
  items: InvoiceItem[];
  subtotal: number;
  tax: number;
  total: number;
  status: 'draft' | 'sent' | 'paid' | 'overdue';
}

const initialInvoice: InvoiceData = {
  number: 'INV-2024-001',
  date: '2024-07-05',
  dueDate: '2024-07-20',
  client: {
    name: 'XYZ Corporation',
    email: 'billing@xyz.com',
    address: '123 Business St, City, State 12345'
  },
  items: [
    {
      id: '1',
      description: 'Web Development Services',
      quantity: 40,
      rate: 75,
      amount: 3000
    },
    {
      id: '2',
      description: 'UI/UX Design',
      quantity: 20,
      rate: 85,
      amount: 1700
    },
    {
      id: '3',
      description: 'Project Management',
      quantity: 15,
      rate: 65,
      amount: 975
    }
  ],
  subtotal: 5675,
  tax: 567.5,
  total: 6242.5,
  status: 'draft'
};

export default function InvoicingDemo() {
  const [activeTab, setActiveTab] = useState<'create' | 'preview'>('create');
  const [invoice, setInvoice] = useState<InvoiceData>(initialInvoice);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(amount);
  };

  const calculateTotals = (items: InvoiceItem[]) => {
    const subtotal = items.reduce((sum, item) => sum + item.amount, 0);
    const tax = subtotal * 0.1; // 10% tax
    const total = subtotal + tax;
    return { subtotal, tax, total };
  };

  const updateInvoice = (field: string, value: any) => {
    setInvoice(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const updateClient = (field: string, value: string) => {
    setInvoice(prev => ({
      ...prev,
      client: {
        ...prev.client,
        [field]: value
      }
    }));
  };

  const updateItem = (id: string, field: string, value: any) => {
    setInvoice(prev => {
      const updatedItems = prev.items.map(item => {
        if (item.id === id) {
          const updatedItem = { ...item, [field]: value };
          if (field === 'quantity' || field === 'rate') {
            updatedItem.amount = updatedItem.quantity * updatedItem.rate;
          }
          return updatedItem;
        }
        return item;
      });
      
      const { subtotal, tax, total } = calculateTotals(updatedItems);
      
      return {
        ...prev,
        items: updatedItems,
        subtotal,
        tax,
        total
      };
    });
  };

  const addItem = () => {
    const newItem: InvoiceItem = {
      id: Date.now().toString(),
      description: 'New Service',
      quantity: 1,
      rate: 100,
      amount: 100
    };
    
    setInvoice(prev => {
      const updatedItems = [...prev.items, newItem];
      const { subtotal, tax, total } = calculateTotals(updatedItems);
      
      return {
        ...prev,
        items: updatedItems,
        subtotal,
        tax,
        total
      };
    });
  };

  const removeItem = (id: string) => {
    setInvoice(prev => {
      const updatedItems = prev.items.filter(item => item.id !== id);
      const { subtotal, tax, total } = calculateTotals(updatedItems);
      
      return {
        ...prev,
        items: updatedItems,
        subtotal,
        tax,
        total
      };
    });
  };

  const downloadInvoice = () => {
    const invoiceHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Invoice ${invoice.number}</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 40px; }
          .header { display: flex; justify-content: space-between; align-items: start; margin-bottom: 40px; }
          .company { font-size: 24px; font-weight: bold; color: #2563eb; }
          .invoice-details { display: flex; justify-content: space-between; margin-bottom: 40px; }
          .client-info { flex: 1; }
          .invoice-meta { flex: 1; text-align: right; }
          table { width: 100%; border-collapse: collapse; margin-bottom: 40px; }
          th, td { padding: 12px; text-align: left; border-bottom: 1px solid #ddd; }
          th { background-color: #f5f5f5; font-weight: bold; }
          .text-right { text-align: right; }
          .totals { margin-left: auto; width: 300px; }
          .total-row { font-weight: bold; border-top: 2px solid #000; }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <h1>INVOICE</h1>
            <p>#${invoice.number}</p>
          </div>
          <div class="company">Accountax</div>
        </div>
        
        <div class="invoice-details">
          <div class="client-info">
            <h3>Bill To:</h3>
            <div><strong>${invoice.client.name}</strong></div>
            <div>${invoice.client.email}</div>
            <div>${invoice.client.address}</div>
          </div>
          <div class="invoice-meta">
            <div><strong>Invoice Date:</strong> ${invoice.date}</div>
            <div><strong>Due Date:</strong> ${invoice.dueDate}</div>
          </div>
        </div>
        
        <table>
          <thead>
            <tr>
              <th>Description</th>
              <th class="text-right">Qty</th>
              <th class="text-right">Rate</th>
              <th class="text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            ${invoice.items.map(item => `
              <tr>
                <td>${item.description}</td>
                <td class="text-right">${item.quantity}</td>
                <td class="text-right">${formatCurrency(item.rate)}</td>
                <td class="text-right">${formatCurrency(item.amount)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
        
        <div class="totals">
          <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
            <span>Subtotal:</span>
            <span>${formatCurrency(invoice.subtotal)}</span>
          </div>
          <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
            <span>Tax (10%):</span>
            <span>${formatCurrency(invoice.tax)}</span>
          </div>
          <div class="total-row" style="display: flex; justify-content: space-between; padding-top: 8px;">
            <span>Total:</span>
            <span>${formatCurrency(invoice.total)}</span>
          </div>
        </div>
      </body>
      </html>
    `;
    
    const blob = new Blob([invoiceHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `invoice-${invoice.number}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const sendInvoice = () => {
    setInvoice(prev => ({ ...prev, status: 'sent' }));
    alert('Invoice sent successfully!');
  };

  const TabButton = ({ id, label, icon, isActive, onClick }: {
    id: string;
    label: string;
    icon: React.ReactNode;
    isActive: boolean;
    onClick: () => void;
  }) => (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
        isActive
          ? 'bg-blue-600 text-white shadow-md'
          : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Try Our Invoicing Platform
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Experience the power of professional invoicing with our interactive demo
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2 bg-white p-2 rounded-xl shadow-sm">
            <TabButton
              id="create"
              label="Create Invoice"
              icon={<FileText className="w-5 h-5" />}
              isActive={activeTab === 'create'}
              onClick={() => setActiveTab('create')}
            />
            <TabButton
              id="preview"
              label="Preview"
              icon={<Eye className="w-5 h-5" />}
              isActive={activeTab === 'preview'}
              onClick={() => setActiveTab('preview')}
            />
          </div>
        </div>

        {/* Demo Content */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Create Invoice Tab */}
          {activeTab === 'create' && (
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Create New Invoice</h3>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Form Section */}
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Invoice Number
                      </label>
                      <input
                        type="text"
                        value={invoice.number}
                        onChange={(e) => updateInvoice('number', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date
                      </label>
                      <input
                        type="date"
                        value={invoice.date}
                        onChange={(e) => updateInvoice('date', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Due Date
                    </label>
                    <input
                      type="date"
                      value={invoice.dueDate}
                      onChange={(e) => updateInvoice('dueDate', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Client Name
                    </label>
                    <input
                      type="text"
                      value={invoice.client.name}
                      onChange={(e) => updateClient('name', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Client Email
                    </label>
                    <input
                      type="email"
                      value={invoice.client.email}
                      onChange={(e) => updateClient('email', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Client Address
                    </label>
                    <textarea
                      value={invoice.client.address}
                      onChange={(e) => updateClient('address', e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div className="flex space-x-4">
                    <button 
                      onClick={sendInvoice}
                      className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Invoice</span>
                    </button>
                    <button 
                      onClick={downloadInvoice}
                      className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Items Section */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg font-semibold text-gray-900">Invoice Items</h4>
                    <button
                      onClick={addItem}
                      className="bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-1"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add Item</span>
                    </button>
                  </div>
                  
                  <div className="space-y-3">
                    {invoice.items.map((item) => (
                      <div key={item.id} className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <input
                            type="text"
                            value={item.description}
                            onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                            className="flex-1 font-medium text-gray-900 bg-transparent border-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1"
                          />
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-red-600 hover:text-red-800 ml-2"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-sm">
                          <div>
                            <label className="text-gray-600">Qty:</label>
                            <input
                              type="number"
                              value={item.quantity}
                              onChange={(e) => updateItem(item.id, 'quantity', parseInt(e.target.value) || 0)}
                              className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                          <div>
                            <label className="text-gray-600">Rate:</label>
                            <input
                              type="number"
                              value={item.rate}
                              onChange={(e) => updateItem(item.id, 'rate', parseFloat(e.target.value) || 0)}
                              className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                            />
                          </div>
                          <div>
                            <label className="text-gray-600">Amount:</label>
                            <div className="font-semibold text-gray-900 px-2 py-1">
                              {formatCurrency(item.amount)}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 space-y-2 border-t pt-4">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal:</span>
                      <span>{formatCurrency(invoice.subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Tax (10%):</span>
                      <span>{formatCurrency(invoice.tax)}</span>
                    </div>
                    <div className="flex justify-between text-lg font-semibold text-gray-900 border-t pt-2">
                      <span>Total:</span>
                      <span>{formatCurrency(invoice.total)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Preview Tab */}
          {activeTab === 'preview' && (
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Invoice Preview</h3>
              
              <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
                {/* Invoice Header */}
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">INVOICE</h1>
                    <p className="text-gray-600 mt-1">#{invoice.number}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">Accountax</div>
                    <div className="text-sm text-gray-600 mt-1">
                      Professional Services
                    </div>
                  </div>
                </div>

                {/* Invoice Details */}
                <div className="grid grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Bill To:</h4>
                    <div className="text-gray-600">
                      <div className="font-medium">{invoice.client.name}</div>
                      <div>{invoice.client.email}</div>
                      <div className="whitespace-pre-line">{invoice.client.address}</div>
                    </div>
                  </div>
                  <div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Invoice Date:</span>
                        <span className="font-medium">{invoice.date}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Due Date:</span>
                        <span className="font-medium">{invoice.dueDate}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Items Table */}
                <div className="mb-8">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 text-gray-600">Description</th>
                        <th className="text-right py-3 text-gray-600">Qty</th>
                        <th className="text-right py-3 text-gray-600">Rate</th>
                        <th className="text-right py-3 text-gray-600">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {invoice.items.map((item) => (
                        <tr key={item.id} className="border-b border-gray-100">
                          <td className="py-3 text-gray-900">{item.description}</td>
                          <td className="py-3 text-right text-gray-600">{item.quantity}</td>
                          <td className="py-3 text-right text-gray-600">{formatCurrency(item.rate)}</td>
                          <td className="py-3 text-right font-medium text-gray-900">{formatCurrency(item.amount)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Totals */}
                <div className="flex justify-end">
                  <div className="w-64 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal:</span>
                      <span>{formatCurrency(invoice.subtotal)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax (10%):</span>
                      <span>{formatCurrency(invoice.tax)}</span>
                    </div>
                    <div className="flex justify-between text-lg font-semibold border-t pt-2">
                      <span>Total:</span>
                      <span>{formatCurrency(invoice.total)}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-8 flex space-x-4">
                  <button 
                    onClick={downloadInvoice}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download Invoice</span>
                  </button>
                  <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
                    <CreditCard className="w-5 h-5" />
                    <span>Pay Now - {formatCurrency(invoice.total)}</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Ready to streamline your invoicing process?
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Start Free Trial
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}