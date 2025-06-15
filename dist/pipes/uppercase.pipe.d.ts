import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
export declare class UppercasePipe implements PipeTransform<string, string> {
    transform(value: string, metadata: ArgumentMetadata): string;
}
