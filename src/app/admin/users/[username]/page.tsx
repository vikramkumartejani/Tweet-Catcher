import UserProfile from '@/components/Admin/Users/UserProfile'

interface UserPageProps {
    params: {
        username: string
    }
}

export default function UserPage({ params }: UserPageProps) {
    return <UserProfile username={params.username} />
}
