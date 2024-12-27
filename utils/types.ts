import z from 'zod';

export const signUpSchema = z.object({
  full_name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
});

export type SignUpFormValues = z.infer<typeof signUpSchema>;

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

export const forgotPasswordSchema = z.object({
  email: z.string().email(),
});

export type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

export const newCarSchema = z.object({
  make: z.string(),
  model: z.string(),
  year: z.coerce.number().min(1885).max(new Date().getFullYear() + 1),
  mileage: z.coerce.number().min(0),
  price: z.coerce.number().min(0),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  transmission: z.string(),
  engine_type: z.string(),
  condition: z.string(),
  capacity: z.coerce.number(),
});

export type NewCarFormValues = z.infer<typeof newCarSchema>;

export const updateCarSchema = z.object({
  id: z.coerce.number(),
  make: z.string(),
  model: z.string(),
  year: z.coerce
    .number()
    .min(1885)
    .max(new Date().getFullYear() + 1),
  mileage: z.coerce.number().min(0),
  price: z.coerce.number().min(0),
  description: z.string().min(10, "Description must be at least 10 characters"),
  user_id: z.string().optional(),
  transmission: z.string(),
  engine_type: z.string(),
  condition: z.string(),
  capacity: z.coerce.number(),
});

export type UpdateCarFormValues = z.infer<typeof updateCarSchema>;

export const newCarImageSchema = z.object({
  car_id: z.coerce.number(),
  image_url: z.string(),
});

export type NewCarImageFormValues = z.infer<typeof newCarImageSchema>;

export const updateCarImageSchema = z.object({
  id: z.coerce.number(),
  car_id: z.coerce.number(),
  image_url: z.string(),
});

export type UpdateCarImageFormValues = z.infer<typeof updateCarImageSchema>;

export const newCarVideoSchema = z.object({
  car_id: z.coerce.number(),
  video_url: z.string(),
})

export type NewCarVideoFormValues = z.infer<typeof newCarVideoSchema>;

export const updateCarVideoSchema = z.object({
  id: z.coerce.number(),
  car_id: z.coerce.number(),
  video_url: z.string(),
});

export type UpdateCarVideoFormValues = z.infer<typeof updateCarVideoSchema>;

export const newCarFeatureSchema = z.object({
  car_id: z.coerce.number(),
  feature: z.string(),
});

export type NewCarFeatureFormValues = z.infer<typeof newCarFeatureSchema>;

export const deleteCarFeatureSchema = z.object({
  id: z.coerce.number(),
});

export type DeleteCarFeatureFormValues = z.infer<typeof deleteCarFeatureSchema>;

export const updateCarFeatureSchema = z.object({
  id: z.coerce.number(),
  car_id: z.coerce.number(),
  feature: z.string(),
});

export type UpdateCarFeatureFormValues = z.infer<typeof updateCarFeatureSchema>;
