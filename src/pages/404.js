import { useRouter } from "next/router";

const NotFoundPage = () => {
    const router = useRouter();

    setTimeout(() => {
        router.push("/")
    }, 3000);

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Error 404</h1>
                        <p className="py-6">The page you are looking for was not found on this planet. Keep digging, maybe you will find something useful oneday!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;