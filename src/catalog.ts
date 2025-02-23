import { bucket_url } from "./bear_enum";
import { CatalogCardProps } from "./props/CatalogProps";

const Citylayers: CatalogCardProps = {
    name: "Citylayers",
    link: "https://citylayers.visualculture.tuwien.ac.at/",
    image: `${bucket_url}/products/citylayers/cover.png`
}

const Cryptopanties: CatalogCardProps = {
    name: "Cryptopanties",
    link: "https://www.rave-review.com/projects/cryptopanties/",
    image: `${bucket_url}/products/cryptopanties/cover.png`
}

const ALC: CatalogCardProps = {
    name: "AEC in Code Wiki",
    link: "https://stasya00.github.io/ALCwiki/",
    image: `${bucket_url}/products/ALC/wiki/cover.png`
}

const GH: CatalogCardProps = {
    name: "AEC in Graphical Programming",
    link: "https://stasya00.github.io/ALCwiki/",
    image: `${bucket_url}/products/ALC/gh/cover.png`
}

const AECdata: CatalogCardProps = {
    name: "AEC in Data",
    link: "https://stasya00.github.io/ALCwiki/datasets",
    image: `${bucket_url}/products/ALC/AECdata/cover.png`
}

export {Citylayers, Cryptopanties, GH, ALC, AECdata}