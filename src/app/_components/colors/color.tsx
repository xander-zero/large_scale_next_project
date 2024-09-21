'use client';

import { colord } from 'colord';
import { tailwindColors } from '../../../../tailwind.config';

const getTextColor = (backgroundColor: string): string =>
  colord(backgroundColor).isDark() ? '#dddddd' : '#333333';

export const Colors = () => {
  return (
    <div className="flex flex-wrap justify-center" dir="ltr">
      {Object.entries(tailwindColors).map(([name, color]) => (
        <ColorBox key={name} color={color} name={name} />
      ))}
    </div>
  );
};

const ColorBox: React.FC<{ name: string; color: string }> = ({
  name,
  color,
}) => {
  return (
    <div
      className="w-96 h-60 flex flex-col items-center justify-center text-center uppercase"
      style={{ backgroundColor: color, color: getTextColor(color) }}
    >
      <span>{name}</span>
      <span>{color}</span>
    </div>
  );
};
