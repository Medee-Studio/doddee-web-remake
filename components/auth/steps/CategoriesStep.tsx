import { FormLabel } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CategoryAnswers {
  [key: string]: string;
}

interface CategoriesStepProps {
  categoriesSection: any;
  categoryAnswers: CategoryAnswers;
  onCategoryAnswer: (categoryName: string, value: string) => void;
}

export default function CategoriesStep({ categoriesSection, categoryAnswers, onCategoryAnswer }: CategoriesStepProps) {
  const categoriesContent = categoriesSection.content as Array<{
    name: string;
    label: string;
    options: Array<{
      label: string;
      value: string;
    }>;
  }>;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl text-gray-700">
          Votre catégorie
        </CardTitle>
        <p className="text-gray-500">
          Caractérisez votre entreprise pour un accompagnement personnalisé
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {categoriesContent.map((category, index) => (
          <div key={category.name} className="space-y-3">
            <h3 className="text-lg font-medium text-gray-700">
              {category.label}
            </h3>
            <RadioGroup
              value={categoryAnswers[category.name]}
              onValueChange={(value) => onCategoryAnswer(category.name, value)}
              className="flex space-x-6"
            >
              {category.options.map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={option.value}
                    id={`${category.name}-${option.value}`}
                  />
                  <FormLabel
                    htmlFor={`${category.name}-${option.value}`}
                    className="cursor-pointer"
                  >
                    {option.label}
                  </FormLabel>
                </div>
              ))}
            </RadioGroup>
            {index < categoriesContent.length - 1 && (
              <div className="border-b border-gray-200 pt-2" />
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
} 