
import regData from "../../lib/reg-schema.json" 
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"




export default function Login() {
  console.log(regData.properties);

  const returnType = (type)=>{
    if(type === "string"){
      return "text";
    }
    if(type === "number"){
      return "number"
    }
    
    if(type === "boolean"){
      return "text"
    }
    return "";
  }

  return (
    <div className="min-h-screen overflow-x-hidden flex items-center justify-center">
      
      <Card>
        <CardContent>
          <Card>
            <CardContent>
              PRE REGISTRATION SOURCE
          <Input type={returnType(regData?.properties?.pre_registration_source.title)} placeholder={regData?.properties?.pre_registration_source.title} />
          <div>{regData?.properties?.pre_registration_source.description}</div>
          </CardContent>
          </Card>

          <Card className="mt-5">
            <CardContent>
              PERSONAL INFO
            <Input className="mt-5" type={returnType(regData?.properties?.personalInfo.title)} placeholder={regData?.properties?.personalInfo.title} />
             <div>{regData?.properties?.personalInfo.description}</div>
              <Card className="mt-5">
                
               <CardContent>
                INSIDE PERSONAL INFO
              <Input className="mt-5" type={returnType(regData?.properties?.personalInfo.properties.name.type)} placeholder={regData?.properties?.personalInfo.properties.name.title} />
          
               <div>{regData?.properties?.personalInfo.properties.name.description}</div>
                 </CardContent>
           </Card>
           </CardContent>
           </Card>


            <Card className="mt-5">
            <CardContent>
              CONTACT INFO
          <Input className="mt-5"type={returnType(regData?.properties?.contactInfo.title)} placeholder={regData?.properties?.contactInfo.title} />
           <div>{regData?.properties?.contactInfo.description}</div>

            <Card className="mt-5">
                
               <CardContent>
                INSIDE CONTACT INFO
              <Input className="mt-5" type={returnType(regData?.properties?.contactInfo.properties.email.type)} placeholder={regData?.properties?.contactInfo.properties.email.title} />
          
               <div>{regData?.properties?.contactInfo.properties.email.description}</div>


                <Input className="mt-5" type={returnType(regData?.properties?.contactInfo.properties.phone_number.type)} placeholder={regData?.properties?.contactInfo.properties.phone_number.title} />
          
               <div>{regData?.properties?.contactInfo.properties.phone_number.description}</div>


                <Input className="mt-5" type={returnType(regData?.properties?.contactInfo.properties.is_phone_and_whatsapp_same.type)} placeholder={regData?.properties?.contactInfo.properties.is_phone_and_whatsapp_same.title} />
          
               <div>{regData?.properties?.contactInfo.properties.is_phone_and_whatsapp_same.description}</div>

                <Input className="mt-5" type={returnType(regData?.properties?.contactInfo.properties.whatsapp_number.type)} placeholder={regData?.properties?.contactInfo.properties.whatsapp_number.title} />
          
               <div>{regData?.properties?.contactInfo.properties.whatsapp_number.description}</div>

               
                  <Select>
                  <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder={regData?.properties?.contactInfo.properties.preffered_mode_of_contact.title

                      } />
                  </SelectTrigger>
                  <SelectContent>
                    {regData?.properties?.contactInfo.properties.preffered_mode_of_contact.enumNames.map((item)=>(
                      <SelectItem value="light">{item}</SelectItem>
                    ))}
                      
      
                  </SelectContent>
                  </Select>
               <div>{regData?.properties?.contactInfo.properties.preffered_mode_of_contact.description}</div>


                 </CardContent>
           </Card>
             </CardContent>

             
           </Card>


            <Card className="mt-5">
            <CardContent>
              BUISINESS INFO
          <Input className="mt-5" type={returnType(regData?.properties?.businessInfo.title)} placeholder={regData?.properties?.businessInfo.title} />
           <div>{regData?.properties?.businessInfo.description}</div>
               <Card className="mt-5">
             <CardContent>
                INSIDE BUISINESS INFO
              <Input className="mt-5" type={returnType(regData?.properties?.businessInfo.properties.brand.type)} placeholder={regData?.properties?.businessInfo.properties.brand.title} />
          
               <div>{regData?.properties?.businessInfo.properties.brand.description}</div>

                <Input className="mt-5" type={returnType(regData?.properties?.businessInfo.properties.website.type)} placeholder={regData?.properties?.businessInfo.properties.website.title} />
          
               <div>{regData?.properties?.businessInfo.properties.website.description}</div>

                 <Input className="mt-5" type={returnType(regData?.properties?.businessInfo.properties.gst.type)} placeholder={regData?.properties?.businessInfo.properties.gst.title} />
          
               <div>{regData?.properties?.businessInfo.properties.gst.description}</div>

             
                 <Select>
                  <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder={regData?.properties?.businessInfo.properties.type_of_business.title

                      } />
                  </SelectTrigger>
                  <SelectContent>
                    {regData?.properties?.businessInfo.properties.type_of_business.enumNames.map((item)=>(
                      <SelectItem value="light">{item}</SelectItem>
                    ))}
                      
      
                  </SelectContent>
                  </Select>
               <div>{regData?.properties?.businessInfo.properties.type_of_business.description}</div>

                
                 <Select>
                  <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder={regData?.properties?.businessInfo.properties.category.title

                      } />
                  </SelectTrigger>
                  <SelectContent>
                    {regData?.properties?.businessInfo.properties.category.enumNames.map((item)=>(
                      <SelectItem value="light">{item}</SelectItem>
                    ))}
                      
      
                  </SelectContent>
                  </Select>
               <div>{regData?.properties?.businessInfo.properties.category.description}</div>

                <Input className="mt-5" type={returnType(regData?.properties?.businessInfo.properties.social_media.type)} placeholder={regData?.properties?.businessInfo.properties.social_media.title} />
          
               <div>{regData?.properties?.businessInfo.properties.social_media.description}</div>

                
          
               
                 </CardContent></Card>
             </CardContent>
           </Card>

            <Card className="mt-5">
            <CardContent>
              OPERATIONAL INFO
          <Input className="mt-5" type={returnType(regData?.properties?.operationalInfo.title)} placeholder={regData?.properties?.operationalInfo.title} />
           <div>{regData?.properties?.operationalInfo.description}</div>
           <Card className="mt-5">
            <CardContent >
                INSIDE OPERATIONAL INFO
             

                
                 <Select>
                  <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder={regData?.properties?.operationalInfo.properties.operating_years.title

                      } />
                  </SelectTrigger>
                  <SelectContent>
                    {regData?.properties?.operationalInfo.properties.operating_years.enumNames.map((item)=>(
                      <SelectItem value="light">{item}</SelectItem>
                    ))}
                      
      
                  </SelectContent>
                  </Select>
               <div>{regData?.properties?.operationalInfo.properties.operating_years.description}</div>

               
                   <Select>
                  <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder={regData?.properties?.operationalInfo.properties.sales_channels.title

                      } />
                  </SelectTrigger>
                  <SelectContent>
                    {regData?.properties?.operationalInfo.properties.sales_channels.properties.active_channels.items.enumNames.map((item)=>(
                      <SelectItem value="light">{item}</SelectItem>
                    ))}
                      
      
                  </SelectContent>
                  </Select>
               <div>{regData?.properties?.operationalInfo.properties.sales_channels.description}</div>


                     <Select>
                  <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder={regData?.properties?.operationalInfo.properties.business_metrics.title

                      } />
                  </SelectTrigger>
                  <SelectContent>
                    {regData?.properties?.operationalInfo.properties.business_metrics.properties.monthly_gmv.enumNames.map((item)=>(
                      <SelectItem value="light">{item}</SelectItem>
                    ))}
                      
      
                  </SelectContent>
                  </Select>
               <div>{regData?.properties?.operationalInfo.properties.business_metrics.description}</div>

                
                 </CardContent></Card>

                 


        </CardContent>
      </Card>
       </CardContent>
           </Card>
    </div>
  )
}
