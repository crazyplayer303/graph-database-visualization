import React, { useState } from 'react';
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, AreaChart, Area } from 'recharts';

const GraphDatabaseVisualizations = () => {
  // Tab state
  const [activeTab, setActiveTab] = useState('fraudReduction');
  const [showCode, setShowCode] = useState(false);
  
  // Data for the charts
  const fraudReductionData = [
    { name: 'Traditional DB', value: 1720, fill: '#8884d8' },
    { name: 'Graph DB', value: 980, fill: '#82ca9d' },
  ];
  
  const timeEfficiencyData = [
    { name: 'Alert Triage (CBA)', traditional: 100, graph: 60 },
    { name: 'Scenario Runtime (JP Morgan)', traditional: 100, graph: 5 },
    { name: 'SAR Analysis (US Bank)', traditional: 100, graph: 43 },
  ];
  
  const adoptionBarriersData = [
    { name: 'Skills Shortage', value: 68 },
    { name: 'Integration Complexity', value: 52 },
    { name: 'License Cost', value: 47 },
    { name: 'Data Migration', value: 41 },
    { name: 'Security Concerns', value: 35 },
  ];
  
  const falsePositiveReductionData = [
    { name: 'Rule Engine', value: 92, fill: '#ff4444' },
    { name: 'Graph DB', value: 65, fill: '#44ff44' },
  ];
  
  const marketAdoptionData = [
    { year: 2020, adoption: 12 },
    { year: 2021, adoption: 18 },
    { year: 2022, adoption: 27 },
    { year: 2023, adoption: 38 },
    { year: 2024, adoption: 52 },
    { year: 2025, adoption: 63, projected: true },
    { year: 2026, adoption: 72, projected: true },
  ];

  // Code snippets for each chart
  const codeSnippets = {
    fraudReduction: `// Fraud Reduction Chart - Bar Chart (Horizontal)
const fraudReductionData = [
  { name: 'Traditional DB', value: 1720, fill: '#8884d8' },
  { name: 'Graph DB', value: 980, fill: '#82ca9d' },
];

<ResponsiveContainer width="100%" height={400}>
  <BarChart data={fraudReductionData} layout="vertical">
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis type="number" />
    <YAxis dataKey="name" type="category" />
    <Tooltip formatter={(value) => [\`$\${value}\`, 'Fraud Loss']} />
    <Legend />
    <Bar dataKey="value" name="USD per 1,000 Transactions" />
  </BarChart>
</ResponsiveContainer>`,

    timeEfficiency: `// Time Efficiency Chart - Grouped Bar Chart
const timeEfficiencyData = [
  { name: 'Alert Triage (CBA)', traditional: 100, graph: 60 },
  { name: 'Scenario Runtime (JP Morgan)', traditional: 100, graph: 5 },
  { name: 'SAR Analysis (US Bank)', traditional: 100, graph: 43 },
];

<ResponsiveContainer width="100%" height={400}>
  <BarChart data={timeEfficiencyData}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis label={{ value: 'Processing Time (% of Original)', 
                    angle: -90, position: 'insideLeft' }} />
    <Tooltip />
    <Legend />
    <Bar dataKey="traditional" name="Traditional Database" fill="#8884d8" />
    <Bar dataKey="graph" name="Graph Database" fill="#82ca9d" />
  </BarChart>
</ResponsiveContainer>`,

    adoptionBarriers: `// Adoption Barriers Chart - Vertical Bar Chart
const adoptionBarriersData = [
  { name: 'Skills Shortage', value: 68 },
  { name: 'Integration Complexity', value: 52 },
  { name: 'License Cost', value: 47 },
  { name: 'Data Migration', value: 41 },
  { name: 'Security Concerns', value: 35 },
];

<ResponsiveContainer width="100%" height={400}>
  <BarChart data={adoptionBarriersData}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis label={{ value: 'Percentage of Organizations', 
                    angle: -90, position: 'insideLeft' }} />
    <Tooltip formatter={(value) => [\`\${value}%\`, 'Organizations Citing This Barrier']} />
    <Legend />
    <Bar dataKey="value" name="% of Organizations" fill="#ff7300" />
  </BarChart>
</ResponsiveContainer>`,

    falsePositiveReduction: `// False Positive Reduction - Pie Chart
const falsePositiveReductionData = [
  { name: 'Rule Engine', value: 92, fill: '#ff4444' },
  { name: 'Graph DB', value: 65, fill: '#44ff44' },
];

<ResponsiveContainer width="100%" height={400}>
  <PieChart>
    <Pie
      data={falsePositiveReductionData}
      cx="50%"
      cy="50%"
      labelLine={true}
      outerRadius={150}
      label={({ name, value }) => \`\${name}: \${value}%\`}
      dataKey="value"
    />
    <Tooltip formatter={(value) => [\`\${value}%\`, 'False Positive Rate']} />
    <Legend />
  </PieChart>
</ResponsiveContainer>`,

    marketAdoption: `// Market Adoption - Area Chart with Projections
const marketAdoptionData = [
  { year: 2020, adoption: 12 },
  { year: 2021, adoption: 18 },
  { year: 2022, adoption: 27 },
  { year: 2023, adoption: 38 },
  { year: 2024, adoption: 52 },
  { year: 2025, adoption: 63, projected: true },
  { year: 2026, adoption: 72, projected: true },
];

<ResponsiveContainer width="100%" height={400}>
  <AreaChart data={marketAdoptionData}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="year" />
    <YAxis label={{ value: 'Adoption Rate (%)', angle: -90, position: 'insideLeft' }} />
    <Tooltip formatter={(value, name, props) => {
      return props.payload.projected ? 
        [\`\${value}% (Projected)\`, 'Adoption Rate'] : 
        [\`\${value}%\`, 'Adoption Rate'];
    }} />
    <Legend />
    <Area type="monotone" dataKey="adoption" name="Financial Services Adoption" 
          fill="#8884d8" fillOpacity={0.6} stroke="#8884d8" />
  </AreaChart>
</ResponsiveContainer>`
  };

  // Render functions for each chart
  const renderFraudReduction = () => (
    <div className="chart-container">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Fraud Loss Reduction per 1,000 Transactions (USD)</h3>
        <button 
          onClick={() => setShowCode(!showCode)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2"
        >
          <span>{showCode ? '👁️ Hide Code' : '🔧 Show Code'}</span>
        </button>
      </div>
      
      {showCode && (
        <div className="mb-6 bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm"><code>{codeSnippets.fraudReduction}</code></pre>
        </div>
      )}
      
      <p className="mb-4 text-gray-700">Graph databases have been shown to reduce fraud losses by 43% compared to traditional database approaches.</p>
      <div className="flex justify-center items-center">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={fraudReductionData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip formatter={(value) => [`$${value}`, 'Fraud Loss']} />
            <Legend />
            <Bar dataKey="value" name="USD per 1,000 Transactions" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 text-sm text-gray-600">
        <p>Source: McKinsey & Company (2024). 2024 in charts: Financial crime and fraud benchmarks.</p>
      </div>
    </div>
  );

  const renderTimeEfficiency = () => (
    <div className="chart-container">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Time Efficiency Comparison (% of Original Time)</h3>
        <button 
          onClick={() => setShowCode(!showCode)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2"
        >
          <span>{showCode ? '👁️ Hide Code' : '🔧 Show Code'}</span>
        </button>
      </div>
      
      {showCode && (
        <div className="mb-6 bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm"><code>{codeSnippets.timeEfficiency}</code></pre>
        </div>
      )}
      
      <p className="mb-4 text-gray-700">Graph databases dramatically reduce processing time across various financial use cases.</p>
      <div className="flex justify-center items-center">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={timeEfficiencyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis label={{ value: 'Processing Time (% of Original)', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="traditional" name="Traditional Database" fill="#8884d8" />
            <Bar dataKey="graph" name="Graph Database" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 text-sm text-gray-600">
        <p>Source: Compiled from FinTech Global (2024), Gartner (2024), and Neo4j (n.d.) case studies.</p>
      </div>
    </div>
  );

  const renderAdoptionBarriers = () => (
    <div className="chart-container">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Top Barriers to Graph Database Adoption (%)</h3>
        <button 
          onClick={() => setShowCode(!showCode)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2"
        >
          <span>{showCode ? '👁️ Hide Code' : '🔧 Show Code'}</span>
        </button>
      </div>
      
      {showCode && (
        <div className="mb-6 bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm"><code>{codeSnippets.adoptionBarriers}</code></pre>
        </div>
      )}
      
      <p className="mb-4 text-gray-700">Despite their advantages, several factors continue to limit widespread adoption of graph databases in financial contexts.</p>
      <div className="flex justify-center items-center">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={adoptionBarriersData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis label={{ value: 'Percentage of Organizations', angle: -90, position: 'insideLeft' }} />
            <Tooltip formatter={(value) => [`${value}%`, 'Organizations Citing This Barrier']} />
            <Legend />
            <Bar dataKey="value" name="% of Organizations" fill="#ff7300" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 text-sm text-gray-600">
        <p>Source: Gartner (2024). Emerging Technology Analysis: Graph Database Market Trends and Barriers.</p>
      </div>
    </div>
  );

  const renderFalsePositiveReduction = () => (
    <div className="chart-container">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">AML False Positive Rate Comparison (%)</h3>
        <button 
          onClick={() => setShowCode(!showCode)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2"
        >
          <span>{showCode ? '👁️ Hide Code' : '🔧 Show Code'}</span>
        </button>
      </div>
      
      {showCode && (
        <div className="mb-6 bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm"><code>{codeSnippets.falsePositiveReduction}</code></pre>
        </div>
      )}
      
      <p className="mb-4 text-gray-700">Graph databases significantly reduce false positive rates in Anti-Money Laundering (AML) monitoring.</p>
      <div className="flex justify-center items-center">
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={falsePositiveReductionData}
              cx="50%"
              cy="50%"
              labelLine={true}
              outerRadius={150}
              label={({ name, value }) => `${name}: ${value}%`}
              dataKey="value"
            />
            <Tooltip formatter={(value) => [`${value}%`, 'False Positive Rate']} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 text-sm text-gray-600">
        <p>Source: FinTech Global (2024). Graph databases transforming financial crime detection and AML capabilities.</p>
      </div>
    </div>
  );

  const renderMarketAdoption = () => (
    <div className="chart-container">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Graph Database Adoption in Financial Services (%)</h3>
        <button 
          onClick={() => setShowCode(!showCode)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2"
        >
          <span>{showCode ? '👁️ Hide Code' : '🔧 Show Code'}</span>
        </button>
      </div>
      
      {showCode && (
        <div className="mb-6 bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
          <pre className="text-sm"><code>{codeSnippets.marketAdoption}</code></pre>
        </div>
      )}
      
      <p className="mb-4 text-gray-700">Adoption of graph databases in financial institutions has grown steadily, with projected continued growth.</p>
      <div className="flex justify-center items-center">
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={marketAdoptionData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis label={{ value: 'Adoption Rate (%)', angle: -90, position: 'insideLeft' }} />
            <Tooltip formatter={(value, name, props) => {
              return props.payload.projected ? 
                [`${value}% (Projected)`, 'Adoption Rate'] : 
                [`${value}%`, 'Adoption Rate'];
            }} />
            <Legend />
            <Area type="monotone" dataKey="adoption" name="Financial Services Adoption" fill="#8884d8" fillOpacity={0.6} stroke="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 text-sm text-gray-600">
        <p>Source: Market analysis based on data from Gartner (2024) and McKinsey & Company (2024).</p>
      </div>
    </div>
  );
  
  return (
    <div className="p-4 max-w-6xl mx-auto bg-white min-h-screen">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Graph Databases in Financial Services</h1>
        <p className="text-lg text-gray-600">Interactive Data Visualizations & Code Analysis</p>
        <div className="mt-4 bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
          <p className="text-blue-800">
            <strong>💡 Educational Feature:</strong> Click "Show Code" on any chart to see the React/Recharts implementation behind the visualization!
          </p>
        </div>
      </div>
      
      {/* Tab navigation */}
      <div className="flex flex-wrap mb-6 border-b bg-gray-50 rounded-t-lg">
        <button 
          className={`p-4 font-medium transition-all duration-200 ${
            activeTab === 'fraudReduction' 
              ? 'border-b-3 border-blue-500 text-blue-600 bg-white' 
              : 'text-gray-600 hover:text-blue-500'
          }`}
          onClick={() => setActiveTab('fraudReduction')}>
          💰 Fraud Reduction
        </button>
        <button 
          className={`p-4 font-medium transition-all duration-200 ${
            activeTab === 'timeEfficiency' 
              ? 'border-b-3 border-blue-500 text-blue-600 bg-white' 
              : 'text-gray-600 hover:text-blue-500'
          }`}
          onClick={() => setActiveTab('timeEfficiency')}>
          ⚡ Time Efficiency
        </button>
        <button 
          className={`p-4 font-medium transition-all duration-200 ${
            activeTab === 'adoptionBarriers' 
              ? 'border-b-3 border-blue-500 text-blue-600 bg-white' 
              : 'text-gray-600 hover:text-blue-500'
          }`}
          onClick={() => setActiveTab('adoptionBarriers')}>
          🚧 Adoption Barriers
        </button>
        <button 
          className={`p-4 font-medium transition-all duration-200 ${
            activeTab === 'falsePositiveReduction' 
              ? 'border-b-3 border-blue-500 text-blue-600 bg-white' 
              : 'text-gray-600 hover:text-blue-500'
          }`}
          onClick={() => setActiveTab('falsePositiveReduction')}>
          🎯 False Positives
        </button>
        <button 
          className={`p-4 font-medium transition-all duration-200 ${
            activeTab === 'marketAdoption' 
              ? 'border-b-3 border-blue-500 text-blue-600 bg-white' 
              : 'text-gray-600 hover:text-blue-500'
          }`}
          onClick={() => setActiveTab('marketAdoption')}>
          📈 Market Adoption
        </button>
      </div>
      
      {/* Active chart */}
      <div className="border rounded-lg p-6 bg-white shadow-lg">
        {activeTab === 'fraudReduction' && renderFraudReduction()}
        {activeTab === 'timeEfficiency' && renderTimeEfficiency()}
        {activeTab === 'adoptionBarriers' && renderAdoptionBarriers()}
        {activeTab === 'falsePositiveReduction' && renderFalsePositiveReduction()}
        {activeTab === 'marketAdoption' && renderMarketAdoption()}
      </div>
      
      {/* Key Insights */}
      <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">🔍 Key Insights</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>43% fraud reduction</strong> compared to traditional approaches</li>
            <li><strong>Up to 95% faster</strong> processing for complex financial queries</li>
            <li><strong>29% lower</strong> false positive rates in AML monitoring</li>
          </ul>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>Skills shortage</strong> is the biggest adoption barrier (68%)</li>
            <li><strong>4x growth</strong> in market adoption since 2020</li>
            <li><strong>72% projected adoption</strong> by 2026 in financial services</li>
          </ul>
        </div>
      </div>
      
      {/* Tech Stack Info */}
      <div className="mt-6 bg-gray-50 p-4 rounded-lg border">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">🛠️ Built With</h3>
        <div className="flex flex-wrap gap-2">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React</span>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Recharts</span>
          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">JavaScript ES6+</span>
          <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Responsive Design</span>
        </div>
      </div>
    </div>
  );
};

export default GraphDatabaseVisualizations;