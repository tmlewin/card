p// Java
public int minimumDays(List<Integer> parcels){
	Set<Integer> uniqueIntegers = new HashSet<>(parcels);
	uniqueIntegers.remove(0);

	return uniqueIntegers.size();
}