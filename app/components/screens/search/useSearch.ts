

import { useSearchForm } from './useSearchForm'

export const useSearch = () => {
	const { searchTerm, debouncedSearch, control } = useSearchForm()

}
