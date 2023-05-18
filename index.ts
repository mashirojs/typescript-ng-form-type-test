type Options = {
  nonNullable?: boolean;
};

type FormControl<T> = {
  value: T;
};

type FormControlCtr = {
  new <T = any>(value: T): FormControl<T | null>;
  new <T = any>(
    value: T,
    options: Options & { nonNullable: true }
  ): FormControl<T>;
};

const FormControl: FormControlCtr = class _FormControl<T>
  implements FormControl<T>
{
  public value: T;

  constructor(value: T, options?: Options) {
    this.value = value;
  }
};

const form1 = new FormControl<string>('', { nonNullable: true });
const value1 = form1.value;

const form2 = new FormControl<string>('');
const value2 = form2.value;
