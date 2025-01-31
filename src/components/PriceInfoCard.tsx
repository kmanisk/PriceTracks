
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface Props {
  title: string;
  iconSrc: string;
  value: string;
}

const PriceInfoCard = ({ title, iconSrc, value }: Props) => {
  return (
    <Card className="w-full bg-muted">
      <CardHeader>
        <p className="text-sm font-medium text-foreground">{title}</p>
      </CardHeader>

      <CardContent>
        <div className="flex items-center gap-2">
          <Image src={iconSrc} alt={title} width={24} height={24} />
          <p className="text-xl font-bold text-foreground">{value}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PriceInfoCard;
