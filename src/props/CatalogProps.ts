import { CATALOGS } from "../components/section_enum"


interface CatalogProps {
    /** The text to display inside the button */
    name: CATALOGS;
    
  }

interface CatalogCardProps{
  name: string;
  image: string;
  link: string;
}

  export {CatalogProps, CatalogCardProps}
  