import type {ReactNode} from 'react';

import styles from './styles.module.css';

type Point = readonly [number, number];

type Connection = {
  id: string;
  points: readonly Point[];
  incoming?: boolean;
  content?: boolean;
};

const connections: Connection[] = [
  {
    id: 'client-arch-top-python',
    points: [
      [160, 88],
      [160, 156],
    ],
  },
  {
    id: 'client-arch-top-engine',
    points: [
      [440, 88],
      [440, 326],
    ],
  },
  {
    id: 'client-arch-top-csharp',
    points: [
      [720, 88],
      [720, 156],
    ],
    incoming: true,
  },
  {
    id: 'client-arch-python-engine',
    points: [
      [160, 274],
      [160, 326],
    ],
  },
  {
    id: 'client-arch-csharp-engine',
    points: [
      [720, 274],
      [720, 326],
    ],
    incoming: true,
  },
  {
    id: 'client-arch-engine-assets',
    points: [
      [440, 414],
      [440, 446],
    ],
    content: true,
  },
];

function dotsAlong(points: readonly Point[], spacing = 9) {
  const segments = points.slice(0, -1).map((point, index) => {
    const next = points[index + 1];
    return {
      point,
      next,
      length: Math.hypot(next[0] - point[0], next[1] - point[1]),
    };
  });
  const total = segments.reduce((sum, segment) => sum + segment.length, 0);
  const count = Math.max(1, Math.round(total / spacing));

  return Array.from({length: count + 1}, (_, index) => {
    let remaining = (index / count) * total;

    for (const segment of segments) {
      if (remaining <= segment.length) {
        const ratio = segment.length === 0 ? 0 : remaining / segment.length;
        return {
          x: segment.point[0] + (segment.next[0] - segment.point[0]) * ratio,
          y: segment.point[1] + (segment.next[1] - segment.point[1]) * ratio,
          t: index / count,
        };
      }
      remaining -= segment.length;
    }

    const last = points[points.length - 1];
    return {x: last[0], y: last[1], t: 1};
  });
}

export default function ClientArchitecture(): ReactNode {
  return (
    <figure className={styles.figure}>
      <svg
        className={styles.diagram}
        viewBox="0 0 880 540"
        role="img"
        aria-labelledby="client-architecture-title client-architecture-desc"
      >
        <title id="client-architecture-title">OpenMT2 client architecture</title>
        <desc id="client-architecture-desc">
          The client executable uses the Python bridge and the incoming C# bridge,
          and also links the Neoeter engine directly. Asset packs are content
          loaded through the engine.
        </desc>

        {connections.map((connection) => (
          <g key={connection.id}>
            {dotsAlong(connection.points).map((dot, index) => (
              <circle
                key={`${connection.id}-${index}`}
                cx={dot.x}
                cy={dot.y}
                r={connection.incoming ? 1.6 : connection.content ? 1.7 : 1.9}
                fill={
                  connection.incoming
                    ? 'var(--ifm-color-emphasis-500)'
                    : connection.content
                      ? 'var(--ifm-color-emphasis-400)'
                      : 'var(--ifm-color-primary)'
                }
                opacity={
                  connection.incoming ? 0.1 : connection.content ? 0.15 : 0.18
                }
                className={
                  connection.incoming
                    ? styles.incomingDot
                    : connection.content
                      ? styles.contentDot
                      : styles.dot
                }
                style={{animationDelay: `${(dot.t * 1.8).toFixed(2)}s`}}
              />
            ))}
          </g>
        ))}

        {/* Client executable */}
        <rect
          x="40"
          y="20"
          width="800"
          height="64"
          rx="14"
          fill="var(--ifm-color-primary-contrast-background)"
          stroke="var(--ifm-color-primary)"
          strokeWidth="1.5"
        />
        <text
          x="440"
          y="48"
          textAnchor="middle"
          fill="var(--ifm-color-primary-contrast-foreground)"
          fontSize="20"
          fontWeight="700"
        >
          Client Executable
        </text>
        <text
          x="440"
          y="68"
          textAnchor="middle"
          fill="var(--ifm-color-primary-contrast-foreground)"
          fontSize="12"
          opacity="0.7"
        >
          metin2client · game/UI
        </text>

        {/* Python bridge */}
        <rect
          x="40"
          y="160"
          width="240"
          height="110"
          rx="14"
          fill="var(--ifm-background-surface-color)"
          stroke="var(--openmt2-border)"
          strokeWidth="1"
        />
        <text
          x="160"
          y="194"
          textAnchor="middle"
          fill="var(--ifm-font-color-base)"
          fontSize="17"
          fontWeight="600"
        >
          Python bridge
        </text>
        <text
          x="160"
          y="218"
          textAnchor="middle"
          fill="var(--ifm-color-content-secondary)"
          fontSize="12"
        >
          CPython 2.7 host
        </text>
        <text
          x="160"
          y="236"
          textAnchor="middle"
          fill="var(--ifm-color-content-secondary)"
          fontSize="12"
        >
          and Python bindings
        </text>

        {/* C# bridge */}
        <rect
          x="600"
          y="160"
          width="240"
          height="110"
          rx="14"
          fill="var(--ifm-background-surface-color)"
          stroke="var(--ifm-color-emphasis-400)"
          strokeWidth="1.5"
          strokeDasharray="6 4"
        />
        <text
          x="720"
          y="192"
          textAnchor="middle"
          fill="var(--ifm-font-color-base)"
          fontSize="17"
          fontWeight="600"
          opacity="0.9"
        >
          C# bridge
        </text>
        <text
          x="720"
          y="216"
          textAnchor="middle"
          fill="var(--ifm-color-content-secondary)"
          fontSize="12"
        >
          incoming · server + client mods
        </text>
        <text
          x="720"
          y="234"
          textAnchor="middle"
          fill="var(--ifm-color-content-secondary)"
          fontSize="12"
        >
          dev-first modern framework
        </text>

        {/* Neoeter engine */}
        <rect
          x="40"
          y="330"
          width="800"
          height="80"
          rx="14"
          fill="var(--ifm-color-primary-contrast-background)"
          stroke="var(--ifm-color-primary)"
          strokeWidth="1.5"
        />
        <text
          x="440"
          y="362"
          textAnchor="middle"
          fill="var(--ifm-color-primary-contrast-foreground)"
          fontSize="17"
          fontWeight="600"
        >
          Neoeter engine
        </text>
        <text
          x="440"
          y="384"
          textAnchor="middle"
          fill="var(--ifm-color-primary-contrast-foreground)"
          fontSize="12"
          opacity="0.8"
        >
          platform · I/O · render · audio · models · terrain · effects
        </text>

        {/* Assets packs */}
        <rect
          x="290"
          y="450"
          width="300"
          height="70"
          rx="14"
          fill="var(--ifm-background-surface-color)"
          stroke="var(--openmt2-border)"
          strokeWidth="1"
        />
        <text
          x="440"
          y="478"
          textAnchor="middle"
          fill="var(--ifm-font-color-base)"
          fontSize="17"
          fontWeight="600"
        >
          Assets packs
        </text>
        <text
          x="440"
          y="498"
          textAnchor="middle"
          fill="var(--ifm-color-content-secondary)"
          fontSize="12"
        >
          content · loaded by the engine
        </text>

        <text
          x="450"
          y="120"
          textAnchor="start"
          fill="var(--ifm-color-content-secondary)"
          fontSize="10"
        >
          direct engine use
        </text>
        <text
          x="450"
          y="432"
          textAnchor="start"
          fill="var(--ifm-color-content-secondary)"
          fontSize="10"
        >
          content
        </text>
      </svg>
    </figure>
  );
}
