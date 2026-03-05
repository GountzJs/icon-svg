export type IconFn = (color: string) => string;

export type IconName = string;

export type Icons = Record<string, IconFn>;

export class IconRegistry {
  private _icons: Icons = {};

  addIcons(newIcons: Icons) {
    this._icons = { ...this._icons, ...newIcons };
  }
  
  getIcon(name: string): IconFn | undefined {
    return this._icons[name];
  }
  
  set icons(value: Icons) {
    this._icons = value;
  }

  get icons(): Icons {
    return this._icons;
  }

}

export default new IconRegistry();
