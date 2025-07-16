import { StaticImageData } from "next/image"

export type postCardType = {
    img:StaticImageData;
    createdAt: Date;
    title: string;
    body: string;
    slug:number;
}