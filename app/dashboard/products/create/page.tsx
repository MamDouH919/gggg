"use client"

import { FormInputText } from "@/component/customComponent/TextFieldMUI"
import { useCreateProductMutation } from "@/graphql/products.generated"
import { ProductStatusCode } from "@/graphql/types"
import { Button } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2/Grid2"
import { useForm, SubmitHandler } from "react-hook-form"

interface IFormInput {
    name: string
    description: string
    vendor: string
}

export default function CreateProduct() {
    const { register, handleSubmit, control } = useForm<IFormInput>()
    const [createProductMutation, { data, loading, error }] = useCreateProductMutation();
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data);

        createProductMutation({
            variables: {
                ...data,
                statusCode: ProductStatusCode.Draft,
            }
        }).then((data: any) => {
            console.log(data)
        }).catch(() => {
            console.log("sjfkd");

        })
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={1} m={1}>
                <Grid xs={12} md={4} sm={6}>
                    <FormInputText
                        control={control}
                        name="name"
                        label="name"
                    />
                </Grid>
                <Grid xs={12} md={4} sm={6}>
                    <FormInputText
                        control={control}
                        name="description"
                        label="description"
                    />
                </Grid>
                <Grid xs={12} md={4} sm={6}>
                    <FormInputText
                        control={control}
                        name="vendor"
                        label="vendor"
                    />
                </Grid>
                <Grid xs={12}>
                    <Button type="submit" variant="contained">save</Button>
                </Grid>
            </Grid>
        </form>
    )
}