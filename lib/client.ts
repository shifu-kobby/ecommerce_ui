import SanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

export const client = SanityClient({
    projectId: 'akb2kwds',
    dataset: 'production',
    apiVersion: '2023-08-25',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builedr = ImageUrlBuilder(client);

export const urlFor = (source: any) => builedr.image(source);