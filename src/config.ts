export interface SiteConfig {
    author: string;
    authorUrl: string;
    site: string;
    siteLegend: string;
    title: string;
    description: string;
    url: string;
    favicon: string;
    brandHeaderSrc: string;
    brandFooterSrc: string;
    brandAlt: string;
    mailto: string;
    social: {
        instagram?: string;
    }
    colors: {
        primary: string;
        secondary: string;
        accent: string;
        background: string;
        text: string;
    };
}

export const config: SiteConfig = {
    author: 'FTN Agency',
    authorUrl: 'https://wwww.ftn.com',
    site: 'Name Company',
    siteLegend: 'Digital solutions for entrepreneurs and modern businesses.',
    title: 'Title Page',
    description: 'The company sells a lot of things ',
    url: 'https://wwww.namecompany.com/',
    favicon: 'images/favicon.svg',
    brandHeaderSrc: 'src/assets/brand.svg',
    brandFooterSrc: 'src/assets/brand-negative.svg',
    brandAlt: 'Logo de NameCompany',
    mailto: 'mailto:contacto@company.com',
    social: {
        instagram: 'lkajsdfjh'
    },
    colors: {
        primary: '#1E40AF',
        secondary: '#F59E0B',
        accent: '#10B981',
        background: '#F9FAFB',
        text: '#111827'
    }
}