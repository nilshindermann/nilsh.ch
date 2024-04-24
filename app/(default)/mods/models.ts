// Description: This file contains the models for the mods.
// The models are used to define the structure of the data that is returned from the API.
// Reference: https://docs.modrinth.com/

export interface SearchResponse {
    hits: SearchResult[];
    offset: number;
    limit: number;
    total_hits: number;
}

export interface ProjectDonationURL {
    id: string;
    platform: string;
    url: string;
}

export interface ProjectLicense {
    id: string;
    name: string;
    url: string;
}

export interface GalleryImage {
    url: string;
    featured: boolean;
    title: string;
    description: string;
    created: string;
    ordering: number;
}

export interface VersionDependency {
    version_id: string | null;
    project_id: string | null;
    file_name: string | null;
    dependency_type: 'required' | 'optional' | 'incompatible' | 'embedded';
}

export interface VersionFile {
    hashes: VersionFileHashes;
    url: string;
    filename: string;
    primary: boolean;
    size: number;
    file_type: 'required-resource-pack' | 'optional-resource-pack' | null;
}

export interface VersionFileHashes {
    sha256: string;
    sha1: string;
}

export interface Project {
    slug: string;
    title: string;
    description: string;
    categories: string[];
    client_side: 'required' | 'optional' | 'unsupported';
    server_side: 'required' | 'optional' | 'unsupported';
    body: string;
    status: 'approved' | 'archived' | 'unlisted' | 'private' | 'draft';
    additional_categories: string[];
    issues_url: string | null;
    source_url: string | null;
    wiki_url: string | null;
    discord_url: string | null;
    donation_urls: ProjectDonationURL[];
    project_type: 'mod' | 'modpack' | 'resourcepack' | 'shader';
    downloads: number;
    icon_url: string | null;
    color: number | null;
    thread_id: string;
    monetization_status: 'monetized' | 'demonetized' | 'force-demonetized';
    id: string;
    team: string;
    published: string;
    updated: string;
    approved: string;
    queuend: string;
    followers: number;
    license: ProjectLicense;
    versions: string[];
    game_versions: string[];
    loaders: string[];
    gallery: GalleryImage[];
}

export interface SearchResult {
    slug: string;
    title: string;
    description: string;
    categories: string[];
    client_side: 'required' | 'optional' | 'unsupported';
    server_side: 'required' | 'optional' | 'unsupported';
    project_type: string;
    downloads: number;
    icon_url: string | null;
    color: number | null;
    thread_id: string;
    monetization_status: 'monetized' | 'demonetized' | 'force-demonetized';
    project_id: string;
    author: string;
    display_categories: string[];
    versions: string[];
    follows: number;
    date_created: string;
    date_modified: string;
    latest_version: string;
    license: string;
    gallery: string[];
    featured_gallery: string | null;
}

export interface Version {
    name: string;
    version_number: string;
    changelog: string | null;
    dependencies: VersionDependency[];
    game_versions: string[];
    version_type: 'release' | 'beta' | 'alpha';
    loaders: string[];
    featured: boolean;
    status:
        | 'approved'
        | 'archived'
        | 'draft'
        | 'unlisted'
        | 'scheduled'
        | 'unknown';
    requested_status: 'listed' | 'archived' | 'draft' | 'unlisted' | null;
    id: string;
    project_id: string;
    author_id: string;
    date_published: string;
    downloads: number;
    files: VersionFile[];
}

export interface User {
    username: string;
    name: string | null;
    bio: string;
    id: string;
    avatar_url: string;
    created: string;
    role: 'admin' | 'moderator' | 'developer';
}

export interface TeamMember {
    team_id: string;
    user: User;
    role: string;
    ordering: number;
}
