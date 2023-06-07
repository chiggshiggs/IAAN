"use client"

import React, { FunctionComponent } from "react"
import { DevTool } from "@hookform/devtools"
import { zodResolver } from "@hookform/resolvers/zod"
import { CalendarIcon, Check, ChevronDown, ChevronsUpDown } from "lucide-react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { toast } from "@/components/ui/use-toast"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/react-hook-form/form"

interface OwnProps {}

type Props = OwnProps

const investorFormSchema = z.object({
  firstName: z.string().nonempty({ message: "First name is required" }),
  lastName: z.string().nonempty({ message: "Last name is required" }),
  email: z
    .string({ required_error: "Please enter email" })
    .email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  confirmPassword: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  linkedIn: z.string().url({ message: "Invalid LinkedIn URL" }),
  phone: z.string(),
  country: z.string(),
  industry: z.string(),
  gender: z.enum(["male", "female", "other"], {
    invalid_type_error: "Select your gender",
    required_error: "Please select your gender.",
  }),
  address: z.string(),
  commitment: z.enum(["5L", "10L", "15L", "20L+"]),
  sector: z.string(),
})

type FormValues = z.infer<typeof investorFormSchema>

const languages = [
  { label: "FinTech", value: "fintech" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Spanish", value: "es" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Japanese", value: "ja" },
  { label: "Korean", value: "ko" },
  { label: "Chinese", value: "zh" },
] as const

const InvestorForm: FunctionComponent<Props> = (props) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(investorFormSchema),
    mode: "onBlur",
    defaultValues: {
      gender: "male",
      commitment: "5L",
    },
  })

  const onSubmit = (data: FormValues) => {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })

    console.log(data)
  }
  return (
    <>
      <Card className={"min-w-max"}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className={"flex p-2"}>
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <>
                    <FormItem className={"m-4"}>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Balveer Singh" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <>
                    <FormItem className={"m-4"}>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Rao" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </>
                )}
              />
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <>
                    <FormItem className={"m-4"}>
                      <FormLabel>Gender</FormLabel>
                      <div className="relative w-max">
                        <FormControl>
                          <select
                            className={cn(
                              buttonVariants({ variant: "outline" }),
                              "w-[200px] appearance-none bg-transparent font-normal"
                            )}
                            {...field}
                          >
                            <option value={"male"}>Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </select>
                        </FormControl>
                        <ChevronDown className="absolute right-3 top-3 h-4 w-4 opacity-50" />
                      </div>
                      <FormMessage />
                    </FormItem>
                  </>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <>
                  <FormItem className={"m-4"}>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="example@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </>
              )}
            />
            <FormField
              control={form.control}
              name="linkedIn"
              render={({ field }) => (
                <>
                  <FormItem className={"m-4"}>
                    <FormLabel>LinkedIn URL</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://linkedin.com/..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <>
                  <FormItem className={"m-4"}>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="+91 1234567890" {...field} />
                    </FormControl>
                    <FormMessage />
                    <FormDescription>
                      Preferably WhatsApp number
                    </FormDescription>
                  </FormItem>
                </>
              )}
            />
            <div className={"flex"}>
              <FormField
                control={form.control}
                name="commitment"
                render={({ field }) => (
                  <FormItem className={"flex flex-col"}>
                    <FormLabel>Commitment</FormLabel>
                    <div className="relative w-max">
                      <FormControl>
                        <select
                          className={cn(
                            buttonVariants({ variant: "outline" }),
                            "w-[200px] appearance-none bg-transparent font-normal"
                          )}
                          {...field}
                        >
                          <option value="5L">5L</option>
                          <option value="10L">10L</option>
                          <option value="15L">15L</option>
                          <option value="20L+">20L+</option>
                        </select>
                      </FormControl>
                      <ChevronDown className="absolute right-3 top-3 h-4 w-4 opacity-50" />
                    </div>
                    <FormDescription>Minimum commitment amount</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="sector"
                render={({ field }) => (
                  <FormItem className={"flex flex-col"}>
                    <FormLabel>Sector</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            role="combobox"
                            className={cn(
                              "w-[200px] justify-between",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value
                              ? languages.find(
                                  (language) => language.value === field.value
                                )?.label
                              : "Select Sector"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-[200px] p-0">
                        <Command>
                          <CommandInput placeholder="Search language..." />
                          <CommandEmpty>No language found.</CommandEmpty>
                          <CommandGroup>
                            {languages.map((language) => (
                              <CommandItem
                                value={language.value}
                                key={language.value}
                                onSelect={(value) => {
                                  form.setValue("sector", value)
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    language.label === field.value
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                                {language.label}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className={"m-4"}>
              Submit
            </Button>
          </form>
        </Form>
        {/*<DevTool control={form.control} />*/}
      </Card>
    </>
  )
}

export default InvestorForm
