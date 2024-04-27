import TextEditor from "../Components/Dashboard/TextEditor";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { PageProps } from '@/types';
import { DataTable } from '../Components/Dashboard/DataTable';
import { Button, buttonVariants } from '@/Components/ui/button';

export default function BlogEditor({ auth }: PageProps) {
    return(
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Blog Editor</h2>}
        >
            <Head title="Blog Editor" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-4">
                        <TextEditor />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}