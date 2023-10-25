import classNames from 'classnames';
import { useTranslation } from 'next-i18next';
import ReactSelect from 'react-select/async';
import useLocalStorage from '~/features/shared/hooks/useLocalStorage';

type AsyncSelectColumnFilterProps = {
  column: { filterValue: any; setFilter: Function };
  loadOptions: (input: string) => Promise<AsyncSelectColumnFilterOption[]>;
};

export type AsyncSelectColumnFilterOption = {
  value: string | number | null;
  label: string;
};

function AsyncSelectColumnFilter({ column: { setFilter, filterValue }, loadOptions }: AsyncSelectColumnFilterProps) {
  const { t } = useTranslation('common');
  const [value, setValue] = useLocalStorage("local-customer-value",'')

  return (
    <div className="select-column-filter">
      <ReactSelect
        className={classNames('select-column-filter__select')}
        classNamePrefix="react-select"
        value={{label: value || t('messages.select'), value: filterValue}}
        cacheOptions
        isClearable
        defaultOptions
        loadOptions={loadOptions}
        onChange={(val) =>{
          setFilter(val?.value)
          setValue(val?.label)
        }
          
        }
        placeholder={t('messages.select')}
      />
      <style jsx>{`
        .form-group :global(.select-column-filter__select) {
          flex-grow: 1;
        }

        .form-group :global(.select-column-filter__select .react-select__control) {
          border: 1px solid #dee2e6;
        }

        .form-group :global(.select-column-filter__select .react-select__control--is-focused) {
          box-shadow: 0 0 10px rgb(55 125 255 / 10%);
        }
      `}</style>
    </div>
  );
}

export default AsyncSelectColumnFilter;
