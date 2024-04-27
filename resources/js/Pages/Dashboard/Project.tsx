import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { PageProps } from '@/types';
import { DataTable } from '../Components/Dashboard/DataTable';
import { Button, buttonVariants } from '@/Components/ui/button';

export default function Project({ auth }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Project</h2>}
        >
            <Head title="Project" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-4">
                        <div className="flex justify-end">
                            <Link
                                href=''
                                className={`${buttonVariants({
                                    variant: "default",
                                })}`}
                            >
                                New Project
                            </Link>
                        </div>
                        
                        <DataTable />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
