// import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
// import { Controller } from "react-hook-form";

// const options = [
//     {
//         label: "ACTIVE",
//         value: "ACTIVE",
//     },
//     {
//         label: "",
//         value: "ARCHIVED",
//     },
// ];
// export const FormInputDropdown: React.FC<FormInputProps> = ({
//     name,
//     control,
//     label,
// }) => {
//     const generateSingleOptions = () => {
//         return options.map((option: any) => {
//             return (
//                 <MenuItem key={option.value} value={option.value}>
//                     {option.label}
//                 </MenuItem>
//             );
//         });
//     };
//     return (
//         <FormControl size={"small"}>
//             <InputLabel>{label}</InputLabel>
//             <Controller
//                 render={({ field: { onChange, value } }) => (
//                     <Select onChange={onChange} value={value}>
//                         {generateSingleOptions()}
//                     </Select>
//                 )}
//                 control={control}
//                 name={name}
//             />
//         </FormControl>
//     );
// };