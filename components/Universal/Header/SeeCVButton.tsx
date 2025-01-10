import { Button } from "@mantine/core";
import { IconPdf } from '@tabler/icons-react';

export default function SeeCVButton() {
    function HandleOpenCVAsPDF() {
        window.open('/ShaunRose_Resume_12_23_24.pdf', '_blank');
    }

    return (
        <>
            <Button 
                rightSection={<IconPdf size={14} />}
                onClick={() => HandleOpenCVAsPDF()}
            >
                See Curriculum Vitae
            </Button>
        </>
    );
}
