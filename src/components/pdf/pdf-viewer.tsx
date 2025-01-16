// PDFPreview.tsx
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useState, useEffect } from 'react';

interface PDFPreviewProps {
    file: File;
}

export function PDFPreview({ file }: PDFPreviewProps) {
    const [showPreview, setShowPreview] = useState(false);
    const [pdfUrl, setPdfUrl] = useState<string | null>(null);

    const bytesToMB = (bytes: number) => (bytes / 1024 / 1024).toFixed(2);

    useEffect(() => {
        return () => {
            if (pdfUrl) {
                URL.revokeObjectURL(pdfUrl);
            }
        };
    }, [pdfUrl]);

    const handlePreviewClick = () => {
        if (file && !pdfUrl) {
            const url = URL.createObjectURL(file);
            setPdfUrl(url);
        }
        setShowPreview(!showPreview);
    };

    return (
        <Card className='p-6'>
            <h2 className='text-lg font-semibold mb-4'>File Details</h2>
            <div className='flex-col md:flex-row flex md:gap-8 mb-4'>
                <p>File Name: {file.name}</p>
                <p>File Size: {bytesToMB(file.size)} MB</p>
            </div>
            <Separator className='my-4' />
            <Button onClick={handlePreviewClick} variant='outline'>
                {showPreview ? 'Hide Preview' : 'Show Preview'}
            </Button>

            {showPreview && pdfUrl && (
                <div className='mt-4'>
                    <PDFViewer url={pdfUrl} />
                </div>
            )}
        </Card>
    );
}

interface PDFViewerProps {
    url: string;
    className?: string;
}

export function PDFViewer({
    url,
    className = 'w-full mx-auto max-w-screen-lg aspect-[10/12] border rounded-lg',
}: PDFViewerProps) {
    return <iframe src={url} className={className} title='PDF Preview' />;
}
