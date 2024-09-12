function dnaStrand(dna){
    /*
        Validation
    */
    // A) Is the input a string?
    if (typeof dna !== 'string'){
        return `Input validation fail: the input data type is "${typeof dna}"`
    }

    // B) Are all the characters including A, C, G, T?
    const dnaCharacters ='ACGT'
    const isInclude = [...dna].every(
        (character) => dnaCharacters.includes(character)
    )
    if (!isInclude){
        return `Input validation fail: your DNA input is something other than "${dnaCharacters}"`
    }
    
    /*
        Algorithm
    */
    // 1) Convert string to array of characters
    dna = dna.split('')

    // 2) Now we have to check each element of the array
    let resultDNA = dna.map(
        function(character){

            switch (character) {

                // 3-a) If our character was 'A', return 'T'
                case 'A':
                    return 'T'
        
                // 3-b) If our character was 'C', return 'G'
                case 'C':
                    return 'G'

                // 3-c) If our character was 'G', return 'C'
                case 'G':
                    return 'C'

                // 3-d) If our character was 'T', return 'A'
                case 'T':
                    return 'A'
            }

        }
    )

    // 4) Convert output array to string
    resultDNA = resultDNA.join('')

    // 5) Return result
    return resultDNA
}