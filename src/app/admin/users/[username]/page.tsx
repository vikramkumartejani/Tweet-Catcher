import UserProfile from '@/components/Admin/Users/UserProfile'

interface UserPageProps {
    params: Promise<{
        username: string
    }>
}

export default async function UserPage({ params }: UserPageProps) {
    const { username } = await params
    return <UserProfile username={username} />
}
