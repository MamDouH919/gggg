"use client"
import { CloudUpload, LocationOn, NavigateNext } from '@mui/icons-material';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import CustomTab from '@/component/customComponent/CustomTab';
import NextBreadcrumb from '@/component/customComponent/BreadCrumb';
import { styled } from "@mui/material/styles";
import Similar from '@/component/usageWidget/Similar';
import { useProductQuery } from '@/graphql/products.generated';
import { IconButton, InputAdornment, Skeleton, TextField, useTheme } from '@mui/material';
import CustomTabImages from '@/component/customComponent/CustomTabImages';
import { useForm } from 'react-hook-form';
import RadioButtonGroup from '@/component/MUI/MUIRadio';
import { FaMinus, FaPlus } from 'react-icons/fa';
import TextFieldElement from '@/component/MUI/TextFieldElement';
import { useCollectionsQuery } from '@/graphql/collections.generated';

const PREFIX = "ProductView";
const classes = {
    imageWrapper: `${PREFIX}-imageWrapper`,
    time: `${PREFIX}-time`,
    text: `${PREFIX}-text`,
};
const Root = styled(Container)(({ theme }) => ({
    [`& .${classes.imageWrapper}`]: {
        display: 'grid',
        gridGap: '8px',
        gridTemplateColumns: 'repeat(auto-fit, minmax(100%, auto))',
        border: "1px solid #dee2e6",
        padding: "5px",
        borderRadius: "6px",
    },
    [`& .${classes.time}`]: {
        padding: theme.spacing(1),
        background: theme.palette.grey[700],
        borderRadius: 4,
        color: "#fff",
    },
    [`& .${classes.text}`]: {
        color: theme.palette.primary.main
    },
}));
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

// type ProductVariant = {
//     id: number;
//     position: number;
//     DisplayName: string;
//     price: number;
//     originCountryCode?: string | null | undefined; // Make originCountryCode optional
//     sku: string;
//     quantity: number;
//     values?: ({
//         id: number;
//         name: string;
//         option?: ({
//             id: number;
//             name: string;
//             position: number;
//         } | null)[] | undefined;
//     } | null)[] | undefined;
// };

type Option = {
    label: string;
    position: number;
    defaultValue?: string;
    values: {
        label: string;
        id: string;
        disabled: boolean;
    }[];
}

function Page(props: any) {
    const theme = useTheme()
    const id = props.params.id
    const [variants, setVariants] = useState<any>();
    const [anyOption, setAnyOption] = useState<string | undefined>();
    const [options, setOptions] = useState<Option[]>([]);
    const [val, setVal] = useState(0);

    let imageOne = (

        <div className={classes.imageWrapper}>
            <div style={{ position: 'relative', height: '500px' }}>
                <Skeleton variant="rectangular" width={"100%"} height={"100%"} />
            </div>
        </div>
    )
    const [imagesArray, setImagesArray] = useState<any>([
        {
            tabHead: <Skeleton width={90} height={90} />,
            panel: imageOne,
        },
    ])

    const { data, loading } = useProductQuery({
        skip: !Boolean(id),
        variables: {
            id: parseInt(id)
        },
        onCompleted: (data) => {
            const product = data.product
            const optionsData: Option[] = [];
            product.options?.forEach((e) => {
                const option: Option = {
                    label: e?.name ?? '',
                    position: e?.position ?? 0,
                    values: []
                };
                e?.values?.forEach((i) => {
                    option.values.push({
                        label: i?.name ?? '',
                        id: `${i?.id}`,
                        disabled: false
                    });
                });
                optionsData.push(option);
            });

            setOptions(optionsData);
            setAnyOption("optionsData");
            console.log(options);

            product.variants?.[0]?.values?.map((e, i) =>
                optionsData[i].defaultValue = `${e?.id}`
            )
            const variantIds = product.variants?.[0]?.values?.map(value => value?.id);

            const media = product.media?.map(e => {
                return {
                    tabHead:
                        <Image
                            alt="Mountains"
                            src={e?.image?.filePath || ''}
                            width={90}
                            height={90}
                        />,
                    panel:
                        <div className={classes.imageWrapper}>
                            <div>
                                <Image
                                    alt="Mountains"
                                    src={e?.image?.filePath ?? ''}
                                    height={0}
                                    width={0}
                                    sizes='100vw'
                                    style={{
                                        aspectRatio: "auto 4/4",
                                        width: "100%",
                                        height: "100%"
                                    }}
                                />
                            </div>
                        </div>
                }
            })

            setImagesArray(media)
            const productVariant = product?.variants?.[0];
            if (productVariant) {
                setVariants(productVariant);
            }
        }
    });
    const productData = data?.product

    const {
        formState: { errors },
        handleSubmit,
        control,
        watch,
        setValue
    } = useForm();

    const loadingData = !data && loading


    const onSubmit = (data: any) => {
        console.log(data);
    }

    useEffect(() => {
        if (anyOption) {
            const variantIds = productData?.variants?.[0]?.values?.map(value => value?.id);
            getAvailableOptions(variantIds, true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [anyOption])


    const getAvailableOptions = (data: any, haveVariants?: boolean) => {
        const optionsValuesIds = haveVariants ? data : Object.values(data);
        const matchingVariants = productData?.variants?.filter((variant) =>
            optionsValuesIds?.every((searchId: any) =>
                variant?.values?.some((value) => value?.id == searchId)
            )
        );

        setVariants(matchingVariants?.[0])
        optionsValuesIds.map((id: any, index: number) => {
            if (optionsValuesIds.length - 1 === index) {
                return
            }
            const optionWithId = options?.find((option) =>
                option?.values?.some((value) => value.id == id)
            );
            const prevIds = optionsValuesIds.slice(0, index + 1);
            const matchingVariants = productData?.variants?.filter((variant) =>
                prevIds.every((searchId: any) =>
                    variant?.values?.some((value) => value?.id == searchId)
                )
            );

            const nextOptions = matchingVariants?.flatMap(variant =>
                variant?.values?.filter(value => value?.option?.position === Number(optionWithId?.position) + 1)
            );
            const nextOptionsIds = nextOptions?.map(value => value?.id);
            const nextOptionChanged = options?.filter(e => e.position === Number(optionWithId?.position) + 1)
            nextOptionChanged[0].values?.map(e => e.disabled = !nextOptionsIds?.includes(parseInt(e.id)))

            setOptions((prevOptions) =>
                prevOptions.map((option) =>
                    option.label === nextOptionChanged[0].label
                        ? { ...option, values: nextOptionChanged[0].values }
                        : option
                )
            );
        })
    }

    let description = (
        <Stack mt={2}>
            {loading ? <Skeleton width={"100%"} height={250} /> :
                <Typography>
                    {data?.product.description}
                </Typography>}
        </Stack>
    )
    let priceTable = (
        <Grid container spacing={2} margin={2}>
            <Grid xs={12}>
                <Typography>
                    With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </Typography>
            </Grid>
            <Grid xs={12} md={6}>
                Some great feature name here
            </Grid>
            <Grid xs={12} md={6}>
                Some great feature name here
            </Grid>
            <Grid xs={12} md={6}>
                Some great feature name here
            </Grid>
            <Grid xs={12} md={6}>
                Some great feature name here
            </Grid>
            <Grid xs={12} md={6}>
                Some great feature name here
            </Grid>
            <Grid xs={12} md={6}>
                Some great feature name here
            </Grid>
            <Grid xs={12} md={6}>
                Some great feature name here
            </Grid>
            <Grid xs={12} md={6}>
                Some great feature name here
            </Grid>
            <Grid xs={12} md={6}>
                Some great feature name here
            </Grid>
        </Grid>
    )

    const tapsArray = [
        {
            tabHead: "description",
            panel: description,
        },
        {
            tabHead: "price",
            panel: priceTable,
        },
    ];

    console.log(watch("options"));

    return (loading || data || true) ? (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Root maxWidth="lg">
                <NextBreadcrumb />
                <Stack direction={"column"} spacing={5} useFlexGap>
                    <Grid container spacing={3}>
                        <Grid xs={12} md={8}>
                            <CustomTabImages tapDetails={imagesArray} val={val} />
                        </Grid>
                        <Grid xs={12} md={4} display={"flex"} justifyContent={"space-between"} flexDirection={"column"}>
                            <Stack spacing={1}>
                                <Typography variant='h5'>
                                    {loading && <Skeleton width={"100%"} height={50} />}
                                    {data?.product.name}
                                </Typography>
                                {variants && <Typography variant='body2' fontSize={18}>
                                    {loading && <Skeleton width={"100%"} height={50} />}
                                    LE {variants?.price && variants?.price * watch('quantity')} EGP
                                </Typography>}

                                <Typography variant='h5'>
                                    {loading && <Skeleton width={"100%"} height={50} />}
                                </Typography>
                                {loading && <Skeleton width={"100%"} height={150} />}
                                {options?.map((e, i) =>
                                    <RadioButtonGroup
                                        key={i}
                                        label={e.label}
                                        name={`options.${e.label}`}
                                        defaultValue={e.defaultValue}
                                        control={control}
                                        onChange={(e) => getAvailableOptions(watch("options"))}
                                        options={e.values ?? []}
                                    />
                                )}
                                {loading && <Skeleton width={"100%"} height={80} />}
                                {!loading && <TextFieldElement
                                    control={control}
                                    name='quantity'
                                    label="Quantity"
                                    id="quantity"
                                    type='number'

                                    sx={{ width: '20ch' }}
                                    defaultValue={1}
                                    min={1}
                                    max={100000}
                                    onChange={(e) => {
                                        if (parseInt(e.target.value) < 1 || e.target.value === '')
                                            setValue("quantity", 1)
                                    }}
                                    InputProps={{
                                        // min: 0,
                                        // max: 10,
                                        startAdornment:
                                            <IconButton onClick={() => setValue("quantity", watch("quantity") - 1 < 1 ? 1 : watch("quantity") - 1)}>
                                                <FaMinus fontSize={15} />
                                            </IconButton>,
                                        endAdornment:
                                            <IconButton onClick={() => setValue("quantity", watch("quantity") + 1)}>
                                                <FaPlus fontSize={15} />
                                            </IconButton>,
                                    }}
                                />}
                                <Button type='submit' variant='outlined' disabled={!variants}>
                                    {variants ? "add to cart" : "Unavailable"}
                                </Button>
                                <Button type='submit' variant='contained' disabled={!variants}>
                                    Buy it now
                                </Button>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Box sx={{ width: '100%' }}>
                        <CustomTab tapDetails={tapsArray} />
                    </Box>
                </Stack>
            </Root>
        </form>
    ) : <Typography>no found</Typography>
}

export default Page