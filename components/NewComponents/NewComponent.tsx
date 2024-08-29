import { Center, Textarea } from "@mantine/core";

export function NewComponent() {
        return (
                <>
                        <div style={{ maxWidth: "200px" }}>
                                <div>
                                        Hello world!
                                </div>
                                <Textarea
                                        label="Input label"
                                        description="Input description"
                                        placeholder="Input placeholder"
                                />
                        </div>
                </>
        );
}