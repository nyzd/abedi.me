import { MDXRemote } from 'next-mdx-remote/rsc'

async function getPostBody(postPath: string): Promise<string> {
    const info = await fetch(
        `${process.env.GITHUB_API_URL}/repos/0xYakuza/${process.env.POSTS_REPO_NAME}/contents/${postPath}`
    );

    const fileData = await fetch((await info.json() as any).download_url);

    return fileData.text();
}

export default async function Page({ params }: { params: { post: string } }) {
    const data = await getPostBody(params.post);

    return (<MDXRemote source={data} />);
}
