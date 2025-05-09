export enum VoltageLevel {
  HIGH = "HIGH", // Высокое напряжение (110 КВ и выше)
  MEDIUM_LEVEL_ONE = "MEDIUM_LEVEL_ONE", // Среднее напряжение первого уровня (35 КВ)
  MEDIUM_LEVEL_TWO = "MEDIUM_LEVEL_TWO", // Среднее напряжение второго уровня (20-1 КВ)
  LOW = "LOW", // Низкое напряжение (0.4 КВ и ниже)
}

export interface ICalc {
  year: number | null;
  month: number | null;
  voltageLevel: VoltageLevel;
  maxPower: number | null;
  energyVolume?: number | null;
  powerVolume?: number | null;
  hourlyConsumption: {
    weekday?: number[];
    weekend?: number[];
  } | null;
}

export interface IResult {
  energyVolume: number;
  powerVolume: number;
  cost3CK: number;
  cost4CK: number;
  savings: number;
  recommendedCategory: string;
}