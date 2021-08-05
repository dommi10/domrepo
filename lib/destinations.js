import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { getFiles } from './mdx'
import kebabCase from './utils/kebabCase'

const root = process.cwd()

export async function getAllDestinations(type) {
  const files = await getFiles(type)

  let destinationCount = {}
  // Iterate through each post, putting all found destinations into `destinations`
  files.forEach((file) => {
    const source = fs.readFileSync(path.join(root, 'data', type, file), 'utf8')
    const { data } = matter(source)
    if (data.destinations && data.draft !== true) {
      data.destinations.forEach((destination) => {
        const formattedDestination = kebabCase(destination)
        if (formattedDestination in destinationCount) {
          destinationCount[formattedDestination] += 1
        } else {
          destinationCount[formattedDestination] = 1
        }
      })
    }
  })

  return destinationCount
}
