import { Button, FileButton, Group } from "@mantine/core";
import { IconPhoto } from '@tabler/icons-react';
import { useState } from "react";

export default function PhotoUploadButton() {
        const [file, setFile] = useState<File | null>(null);

        return (
                <>
                        <Group justify="center" __size="sm" style={{ width: '100%', padding: '10px' }}>
                                <FileButton onChange={setFile} accept="image/*" capture>
                                        {(props) => (
                                                <Button size="xl" {...props}>
                                                        <IconPhoto style={{ marginRight: 8 }} />
                                                        Upload image
                                                </Button>
                                        )}
                                </FileButton>
                        </Group>
                        {file && <p>Picked file: {file.name}</p>}
                </>
        );
}
