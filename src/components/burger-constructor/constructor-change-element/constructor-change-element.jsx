import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux';
import {useRef} from 'react'
import styles from './constructor-change-element.module.css';
import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import { REMOVE_DRAGGED_INGREDIENTS, MOVE_DRAGGED_INGREDIENTS } from '../../../services/actions/dragged-ingredients';
import { useDrag, useDrop } from 'react-dnd';

function ConstructorChangeElement({ingredient, index}){
  const dispatch = useDispatch()

  const dragRef = useRef(null)
  const previewRef = useRef(null)

  const onRemove = () => {
    dispatch({
      type: REMOVE_DRAGGED_INGREDIENTS,
      uuid: ingredient.uuid
    })
  }

  const [{ handlerId }, drop] = useDrop({
    accept: 'constructor-ingredient',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item, monitor) {
      if (!previewRef.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      if (dragIndex === hoverIndex) {
        return
      }
      const hoverBoundingRect = previewRef.current?.getBoundingClientRect()
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      const clientOffset = monitor.getClientOffset()
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      if (dragIndex !== undefined && hoverIndex !== undefined) {
        dispatch({
          type: MOVE_DRAGGED_INGREDIENTS,
          dragIndex,
          hoverIndex
        })
      }
      item.index = hoverIndex
    },
  })
  const [, drag, preview] = useDrag({
    type: 'constructor-ingredient',
    item: () => ingredient,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })
  
  drag(dragRef)
  drop(preview(previewRef))


  return(
    <div className={styles.wrap} ref={previewRef} data-handler-id={handlerId}>
      <div ref={dragRef}>
        <DragIcon type="primary"  />
      </div>
      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image}
        extraClass='ml-2'
        handleClose={onRemove}
      />
    </div>
  )
}

ConstructorChangeElement.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    calories: PropTypes.number,
    carbohydrates: PropTypes.number,
    fat: PropTypes.number,
    image: PropTypes.string,
    image_large: PropTypes.string,
    image_mobile: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    proteins: PropTypes.number,
    type: PropTypes.string,
    __v: PropTypes.number,
    _id: PropTypes.string
  })),
  index: PropTypes.number
}

export default ConstructorChangeElement;