/// <reference types="react" />
export interface NavBarProps {
    route: string;
    updateSearch: (newValue: string) => void;
}
export declare function NavBar(props: NavBarProps): JSX.Element;
export default NavBar;
