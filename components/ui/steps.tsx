interface Step {
  step: number;
  title: string;
  description: string;
  status?: 'completed' | 'in-progress' | 'pending';
}

interface StepsProps {
  steps: Step[];
}

export default function Steps({ steps }: StepsProps) {
  return (
    <div className="space-y-6">
      {steps.map((item, index) => (
        <div key={index} className="flex items-start gap-4">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm ${
            item.status === 'completed' ? 'bg-green-500 text-white' :
            item.status === 'in-progress' ? 'bg-yellow-500 text-white' :
            'bg-muted text-muted-foreground'
          }`}>
            {item.step}
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-2">
              <h3 className="font-semibold">{item.title}</h3>
              {item.status && (
                <div className={`px-2 py-1 text-xs rounded ${
                  item.status === 'completed' ? 'bg-green-100 text-green-800' :
                  item.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-600'
                }`}>
                  {item.status.replace('-', ' ')}
                </div>
              )}
            </div>
            <p className="text-muted-foreground">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}