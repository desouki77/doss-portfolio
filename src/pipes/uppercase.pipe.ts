import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class UppercasePipe implements PipeTransform<string, string> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  transform(value: string, metadata: ArgumentMetadata): string {
    if (!value) return value;
    return value.toUpperCase();
  }
}
