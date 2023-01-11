import axios from 'axios'
import { useAsyncData } from 'nuxt/app'

// export const URL     = 'http://localhost:1337'
export const API_URL = 'http://localhost:1337/api/'
// export const API_URL = 'https://warm-peak-82519.herokuapp.com/api/'


/**
 *
 * @returns {Promise<*>}
 * @constructor
 */
export const ApiFetchDataTranslations = async () => {
    const res = await axios.get(API_URL + 'translation')

    return res.data.data.attributes
}

/**
 *
 * @returns {Promise<*>}
 * @constructor
 */
export const ApiFetchDataIntroduction = async () => {
    const res = await axios.get(API_URL + 'introduction')

    return res.data.data.attributes
}

/**
 *
 * @returns {Promise<*>}
 * @constructor
 */
// export const ApiFetchDataSkills = async () => {
//     const res = await axios.get(API_URL + 'skill')
//
//     return res.data.data.attributes.skills
// }

export const ApiFetchDataSkills = async () => {
    const res = await useAsyncData(
        'skill',
        () => $fetch(API_URL + 'skill')
    )

    console.log(res.data);

    return res.data.data.attributes.skills
}

/**
 *
 * @returns {Promise<*>}
 * @constructor
 */
export const ApiFetchDataTools = async () => {
    const res = await axios.get(API_URL + 'tool')

    return res.data.data.attributes
}

/**
 *
 * @returns {Promise<*>}
 * @constructor
 */
export const ApiFetchDataSections = async () => {
    const res = await axios.get(API_URL + 'section')

    return res.data.data.attributes.sections
}

/**
 *
 * @returns {Promise<*>}
 * @constructor
 */
export const ApiFetchDataRealisations = async () => {
    const res = await axios.get(API_URL + 'realisations?populate=image')

    return res.data.data
        .map(({ attributes }) => attributes)
        .sort((a, b) => a.position - b.position)
}

/**
 *
 * @returns {Promise<*>}
 * @constructor
 */
export const ApiFetchDataExperiences = async () => {
    const res = await axios.get(API_URL + 'experiences')

    return res.data.data
        .map(({ attributes }) => attributes)
        .sort((a, b) => a.position - b.position)
}

/**
 *
 * @returns {Promise<*>}
 * @constructor
 */
export const ApiFetchDataAbout = async () => {
    const res = await axios.get(API_URL + 'about?populate=image,pdf')

    return res.data.data.attributes
}


/**
 *
 * @returns {Promise<*>}
 * @constructor
 */
export const ApiFetchDataContact = async () => {
    const res = await axios.get(API_URL + 'contact')

    return res.data.data.attributes
}

/**
 *
 * @returns {Promise<*>}
 * @constructor
 */
export const ApiFetchDataFooter = async () => {
    const res = await axios.get(API_URL + 'footer')

    return res.data.data.attributes
}
