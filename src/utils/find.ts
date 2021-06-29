import ItemWithSlug from '../api/types/ItemWithSlug'

export const getWhetherItemHasSlug =
  <Item extends ItemWithSlug>(slug: string) =>
  (item: Item): boolean => {
    return item.slug === slug
  }

export const findItemBySlug = <Item extends ItemWithSlug>(
  items: Item[],
  slug: string
): Item | undefined => {
  return items.find(getWhetherItemHasSlug(slug))
}

export const getItemFinder =
  <Item extends ItemWithSlug>(items: Item[]) =>
  (slug: string) =>
    findItemBySlug<Item>(items, slug)
