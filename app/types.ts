type Routes = {
    id: string;
    name: string;
    url: string;
};

type generalData = {
    id: string;
    title: string;
    desc: string;
    img: string;
    url: string;
};

type DetailData = {
    title: string;
    codeUrl: string;
    liveUrl: string;
    desc: string;
    tech: string[];
    hash: string[];
    heroImg: string;
    mobilePreview: string;
    desktopPreview: string;
};

type Project = {
    _id: string;
    title: string;
    desc: string;
    codeUrl: string;
    liveUrl: string;
    tech: string[];
    hash: string[];
    desktopFull: string;
    mobileFull: string;
    mobilePreview: string;
    desktopPreview: string;
};
