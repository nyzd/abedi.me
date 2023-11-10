import Link from 'next/link';
import { Card, CardDescription, CardHead, CardTitle } from './(components)/card'
import styles from './page.module.css'
export const runtime = "edge";

const FILES_LIST_ROUTE: string = "/git/trees/main?recursive=1";

async function getPosts(): Promise<object> {
    const response = await fetch(
        `${process.env.GITHUB_API_URL}/repos/0xYakuza/${process.env.POSTS_REPO_NAME}${FILES_LIST_ROUTE}`
    );

    return response.json();
}

const cutName = (path: string): string =>
    path.split('-')[0];

const cutExtension = (path: string): string =>
    path.split('.')[0];

const cutDescription = (path: string): string =>
    path.split('-')[1];

export default async function Home() {
    const posts: any = await getPosts();

    return (
        <main className={styles.main}>
            {(posts.tree as any[]).map((post, index) => (
                <Card>
                    <Link href={`/${post.path}`} key={index}>
                        <CardHead>
                            <CardTitle>
                                {cutName(cutExtension(post.path))}
                            </CardTitle>
                            <CardDescription>
                                {cutExtension(cutDescription(post.path))}
                            </CardDescription>
                        </CardHead>
                    </Link>
                </Card>
            ))}
        </main>
    )
}
