import React from 'react'
import {
  Skill,
  Glyph,
  Donut,
  Progress,
  ProgressBackground,
  Logo,
  LogoFrame,
  Label,
  Technology
} from './style.js';

export default ({ label, logo, level, iHeight, iOffs, iOffsH, iRound, techNameSize }) => {
  return (
    <Skill>
      <Glyph>
        <Donut viewBox="0 0 36 36">
          <ProgressBackground
            d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            strokeWidth="0.5"
          />
          <Progress
            d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#444"
            strokeWidth="0.5"
            strokeDasharray={`${level * 10}, 100`}
          />
        </Donut>
        <LogoFrame>
          <Logo src={logo} iOffs={iOffs} iOffsH={iOffsH} iHeight={iHeight} iRound={iRound} />
        </LogoFrame>
      </Glyph>
      <Label>
        <Technology size={techNameSize} >
          {label}
        </Technology>
      </Label>
    </Skill>
  );
}
