export enum TypeOption{
  Link = 'link',
  SubMenu = 'subMenu',
  Button = 'button'
}

export interface SidebarOptionsMenu {
  path: string
  title: string
  icon?: string
  typeOption: TypeOption
}