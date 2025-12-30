import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function FeatureItem({ text }) {
  return (
    <li className="flex items-center gap-3">
      <CheckCircle2 className="text-emerald-400 flex-shrink-0" size={20} />
      <span className="text-slate-300 font-medium">{text}</span>
    </li>
  );
}