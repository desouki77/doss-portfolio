import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class EmailValidationPipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  transform(value: any, metadata: ArgumentMetadata) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    if (!this.isEmailvalid(value)) {
      throw new BadRequestException('invalid email format');
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return value;
  }

  private isEmailvalid(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
