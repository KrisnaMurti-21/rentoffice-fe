import { z } from "zod";

export const bookingSchema = z.object({
    name: z.string().min(1, "Name is required").max(50, "Name must be less than 50 characters"),
    phone_number: z.string().min(1, "Phone number is required").max(20, "Phone number must be less than 20 characters"),
    started_at: z.string().refine((date) => !isNaN(Date.parse(date)), "Invalid date format"),
    office_space_id: z.number().min(1, "Office space ID is required"),
})

export const viewBookingSchema = z.object({
    booking_trx_id: z.string().min(1, "Booking transaction ID is required"),
    phone_number: z.string().min(1, "Phone number is required").max(20, "Phone number must be less than 20 characters"),
})