import { Ink } from "@volterainc/utils-ink";

export declare const ConductiveInkTypes: {
  ConductiveInk: string;
  FlexibleConductiveInk: string;
  ExperimentalInk: string;
  CustomInk: string;
};
export declare const SolderPasteTypes: {
  SolderPaste: string;
  Sn63SolderPaste: string;
  CustomPaste: string;
};
type InkSettingT = {
  min: number;
  max: number;
  defaultValue: number;
  precision: number;
};
type InkType =
  | typeof ConductiveInkTypes[keyof typeof ConductiveInkTypes]
  | typeof SolderPasteTypes[keyof typeof SolderPasteTypes];
type LabelT = {
  color: string;
  type?: string;
};
declare type HeatingProfileStepT = {
  temperature: number;
  duration: number;
};
declare type HeatingProfileT = HeatingProfileStepT[];

/*
// Commented out because they are not used in the current implementation
declare type InkSettingWithOptionalValue = InkSettingT & {
  value?: number;
};
declare type SettingsMapWithOptionValues = {
  [key: string]: InkSettingWithOptionalValue;
};
type InkSettingsWithOptionalValues = {
  [key: string]: SettingsMapWithOptionValues;
};
declare type ConstructorArgsT = {
  type: InkType;
  name: string;
  organization: string;
  useBy: string;
  storage: string;
  material?: string;
  description: string;
  label: LabelT;
  settings: InkSettingsWithOptionalValues;
  heatingProfile: HeatingProfileT;
};
*/

export declare type InkSetting = InkSettingT & {
  value: number;
};
declare type SettingsMapT = {
  [key: string]: InkSetting;
};
declare type InkSettingsT = {
  [key: string]: SettingsMapT;
};
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

type Settings = {
  settings: {
    probing: { [key: string]: InkSettingsT };
    dispensing: { [key: string]: InkSettingsT };
  };
};
type InkDefinition = {
  name: string;
  type: InkType;
  organization: string;
  useBy: string;
  storage: string;
  material?: string;
  description: string;
  label: LabelT;
  heatingProfile: HeatingProfileT;
  settings: Settings;
};
export function setDefaultToValue(setting: InkSetting): InkSettingT {
  const { min, max, precision, value } = setting;
  return {
    min,
    max,
    precision,
    defaultValue: value,
  };
}
function setSettings(settings: InkSettingsT): Settings {
  const newSettingMap = new Map();

  for (const [groupName, group] of Object.entries(settings)) {
    const nestedMap = new Map();
    for (const [fieldName, value] of Object.entries(group)) {
      nestedMap.set(fieldName, setDefaultToValue(value));
    }
    newSettingMap.set(groupName, Object.fromEntries(nestedMap));
  }
  return Object.fromEntries(newSettingMap);
}

export function createInkDefinition({
  name,
  type,
  organization,
  useBy,
  storage,
  material,
  description,
  label,
  heatingProfile,
  settings,
}: Ink): InkDefinition {
  return {
    name,
    type,
    organization,
    useBy,
    storage,
    material,
    description,
    label,
    heatingProfile,
    settings: setSettings(settings),
  };
}
