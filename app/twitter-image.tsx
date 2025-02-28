import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'AI Angkor Intelligence';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  // Font
  const interSemiBold = fetch(
    new URL('./Inter-SemiBold.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: 48,
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0.1,
            fontSize: 24,
          }}
        >
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                color: '#10B981',
                opacity: Math.random() * 0.5 + 0.5,
                transform: `rotate(${Math.random() * 30 - 15}deg)`,
              }}
            >
              ខ្មែរ
            </div>
          ))}
        </div>
        
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            backgroundColor: 'rgba(0,0,0,0.7)',
            padding: 40,
            borderRadius: 24,
            border: '2px solid rgba(16, 185, 129, 0.3)',
          }}
        >
          <div style={{ fontSize: 64, color: '#10B981', marginBottom: 24 }}>
            AI Angkor Intelligence
          </div>
          <div style={{ fontSize: 32, color: 'white', maxWidth: 800 }}>
            Experience the power of Cambodian-inspired AI
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Inter',
          data: await interSemiBold,
          style: 'normal',
          weight: 400,
        },
      ],
    },
  );
} 